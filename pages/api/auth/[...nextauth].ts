import { isBefore } from 'date-fns';
import { Provider } from 'lbn-core/dist/actions/user';
import { UserState } from 'lbn-core/dist/reducers/user';
import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import AppleProvider from 'next-auth/providers/apple';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import { post } from '../../../helpers/request';

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, {
    secret: process.env.JWT_SECRET,
    providers: [
      AppleProvider({
        clientId: process.env.APPLE_CLIENT_ID || '',
        clientSecret: process.env.APPLE_CLIENT_SECRET || '',
      }),
      FacebookProvider({
        clientId: process.env.FACEBOOK_ID || '',
        clientSecret: process.env.FACEBOOK_SECRET || '',
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_ID || '',
        clientSecret: process.env.GOOGLE_SECRET || '',
      }),
    ],
    callbacks: {
      session: async ({ session, token }) => {
        // console.log('Session', { session, user });
        session.user = token;
        return Promise.resolve(session);
      },
      jwt: async ({ token, user, account }) => {
        // profile: any,
        // isNewUser: boolean | undefined
        // console.log('JWT', {
        //   token,
        // });

        if (token.jwt) {
          // @ts-ignore
          if (isBefore(new Date(token.iat * 1000), new Date(2021, 11, 15))) {
            console.log('REFRESH TOKEN');
            // Migrate
            const { accessToken } = await post<{ accessToken: string }>(
              `/auth/migrate/${token.provider}`,
              {
                name: token.name,
                email: token.email,
                providerId: token.id,
              }
            );
            delete token.iat;
            delete token.exp;
            token.jwt = accessToken;
            return Promise.resolve(token);
          }

          return Promise.resolve(token);
        }

        if (!account?.provider) {
          return Promise.reject('No provider');
        }

        const userState: UserState = {
          id: account?.providerAccountId,
          name: user?.name || 'No name',
          provider: (account.provider.charAt(0).toUpperCase() +
            account.provider.slice(1)) as Provider,
          email: user?.email || '',
        };

        switch (userState.provider) {
          case 'Apple': {
            const { accessToken } = await post<{ accessToken: string }>(
              '/auth/apple/login',
              {
                providerId: userState.id,
                name: userState.name,
                email: userState.email,
              }
            );
            userState.jwt = accessToken;
            break;
          }
          case 'Facebook': {
            const { accessToken } = await post<{ accessToken: string }>(
              '/auth/facebook/login',
              {
                providerId: account?.id,
                accessToken: account?.accessToken,
              }
            );
            userState.jwt = accessToken;
            break;
          }
          case 'Google': {
            const { accessToken } = await post<{ accessToken: string }>(
              '/auth/google/login',
              {
                providerId: userState.id,
                name: userState.name,
                email: userState.email,
              }
            );
            userState.jwt = accessToken;
            break;
          }
        }

        // const { data } = await registerUser(userState);
        if (userState.jwt) {
          return Promise.resolve(userState as any);
        }
        return Promise.reject('No provider');
      },
    },
  });
// NextAuth(req, res, options);
