import expressSession from 'cookie-session';
import passport from 'passport';

import { facebook, google } from './providers';

passport.serializeUser((user: any, done) => {
  done(null, { ...user });
});

passport.deserializeUser(async (serializedUser, done) => {
  if (!serializedUser) {
    return done(new Error(`User not found: ${serializedUser}`));
  }
  done(null, serializedUser);
});

const newExpressSession = expressSession({
  secret: 'nix',
  overwrite: true,
});

export default app => {
  app.use(newExpressSession);
  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(facebook);
  passport.use(google);
};
