import { NextApiRequest, NextApiResponse } from 'next';
import passport from 'passport';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { provider } = req.query;
  if (!provider) {
    return { statusCode: 404 };
  }

  passport.authenticate(provider)(req, res, (...args) => {
    console.log('passport authenticated', args);
  });
};

export default handler;
