import requests from "lbn-core/dist/requests";
import { OAuth2Strategy } from "passport-google-oauth";
import appConfig from "../config";

const strategy = new OAuth2Strategy(
  // @ts-ignore
  appConfig.google,
  // @ts-ignore
  async (_accessToken, _refreshToken, profile, cb) => {
    const result: any = await requests.registerUser({
      id: profile.id,
      name: profile.displayName,
      email: profile.emails.length > 0 ? profile.emails[0].value : undefined,
      provider: "Google",
    });

    cb(null, result.data.registerUser);
  }
);

export default strategy;
