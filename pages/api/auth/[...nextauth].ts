import { Provider } from 'lbn-core/dist/actions/user';
import { UserState } from 'lbn-core/dist/reducers/user';
import { registerUser } from 'lbn-core/dist/requests/user';
import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

type Token = {
  name: string | null;
  email: string;
  picture: string | undefined;
};

type Account = {
  provider: 'apple' | 'facebook' | 'google';
  id: string;
};

const options = {
  providers: [
    Providers.Apple({
      clientId: process.env.APPLE_CLIENT_ID || '',
      clientSecret: {
        appleId: process.env.APPLE_CLIENT_ID || '',
        keyId: process.env.APPLE_KEY_ID || '',
        teamId: process.env.APPLE_TEAM_ID || '',
        privateKey: process.env.APPLE_SECRET || '',
      },
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID || '',
      clientSecret: process.env.FACEBOOK_SECRET || '',
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
    }),
  ],
  callbacks: {
    session: async (session: any, user: any) => {
      // console.log('Session', { session, user });
      session.user = user;
      return Promise.resolve(session);
    },
    jwt: async (token: any, user: Token, account: Account) => {
      // profile: any,
      // isNewUser: boolean | undefined
      // console.log('JWT', { token, user, account, profile, isNewUser });
      if (token.jwt) {
        return Promise.resolve(token);
      }

      const userState: UserState = {
        id: account.id,
        name: user.name || 'No name',
        provider: (account.provider.charAt(0).toUpperCase() +
          account.provider.slice(1)) as Provider,
        email: user.email,
      };

      const { data } = await registerUser(userState);
      // console.log({ jwt: data.registerUser });
      return Promise.resolve(data?.registerUser || false);
    },
  },
  // A database is optional, but required to persist accounts in a database
  // database: process.env.DB_URI,
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
