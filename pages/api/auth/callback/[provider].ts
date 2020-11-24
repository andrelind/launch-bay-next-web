import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import passport from "passport";
import { setTokenCookie } from "../../../../passport/auth-cookies";
import { encryptSession } from "../../../../passport/iron";
import { facebook, google } from "../../../../passport/providers";

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

export default nextConnect()
  .use(passport.initialize())
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      // @ts-ignore
      const { provider } = req.query;
      if (!provider) {
        return { statusCode: 404 };
      }

      const user = await authenticate(provider as string, req, res);
      // session is the payload to save in the token, it may contain basic info about the user
      const session = { ...user };
      // The token is a string with the encrypted session
      const token = await encryptSession(session);

      setTokenCookie(res, token);
      res.redirect("/").end();
    } catch (error) {
      console.error(error);
      res.status(401).send(error.message);
    }
  });
