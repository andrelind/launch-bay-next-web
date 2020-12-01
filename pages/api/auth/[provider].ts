import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import passport from "passport";
import { apple, facebook, google } from "../../../passport/providers";

const authenticate = (method: string, req: any, res: any): Promise<any> =>
  new Promise((resolve, reject) => {
    passport.authenticate(method, { session: false }, (error, token) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    })(req, res);
  });

passport.use(facebook);
passport.use(google);
passport.use(apple);

export default nextConnect()
  .use(passport.initialize())
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      // @ts-ignore
      const { provider } = req.query;
      if (!provider) {
        return { statusCode: 404 };
      }

      await authenticate(provider as string, req, res);
      res.status(200).end();
    } catch (error) {
      console.error(error);
      res.status(401).send(error.message);
    }
  });
