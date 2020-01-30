import { OAuth2Strategy } from 'passport-google-oauth';

import { registerUser } from '../../api/user';
import appConfig from '../config';

const strategy = new OAuth2Strategy(
  appConfig.google,
  async (_accessToken, _refreshToken, profile, cb) => {
    const result: any = await registerUser({
      id: profile.id,
      name: profile.displayName,
      email: profile.emails.length > 0 ? profile.emails[0].value : undefined,
      provider: 'Google',
      jwt: null,
    });

    cb(null, result.data.registerUser);
  }
);

export default strategy;
