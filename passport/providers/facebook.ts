import requests from "lbn-core/dist/requests";
import { Strategy } from "passport-facebook";
import appConfig from "../config";

const strategy = new Strategy(
  appConfig.facebook,
  async (_accessToken, _refreshToken, profile, cb) => {
    const result: any = await requests.registerUser({
      id: profile.id,
      name: profile.displayName,
      email:
        profile.emails && profile.emails.length > 0
          ? profile.emails[0].value
          : undefined,
      provider: "Facebook",
    });

    cb(null, result.data.registerUser);
  }
);

export default strategy;
