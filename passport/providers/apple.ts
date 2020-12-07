import requests from "lbn-core/dist/requests";
import AppleStrategy from "passport-apple";
import appConfig from "../config";

const strategy = new AppleStrategy(
  // @ts-ignore
  appConfig.apple,
  async (_req, _accessToken, _refreshToken, decodedIdToken, profile, cb) => {
    console.log({ decodedIdToken, profile });

    const result: any = await requests.registerUser({
      id: decodedIdToken.sub,
      name: decodedIdToken.displayName,
      email: profile.emails.length > 0 ? profile.emails[0].value : undefined,
      provider: "Google",
    });

    cb(null, result.data.registerUser);
  }
);

export default strategy;
