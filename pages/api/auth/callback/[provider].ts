import { NextApiRequest, NextApiResponse } from 'next';
import passport from 'passport';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { provider } = req.query;
  if (!provider) {
    return { statusCode: 404 };
  }

  passport.authenticate(provider, {
    failureRedirect: '/',
    successRedirect: '/',
  })(req, res, (...args) => {
    console.log('auth callback', args);
    return true;
  });
};

export default handler;
