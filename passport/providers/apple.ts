import requests from "lbn-core/dist/requests";
import AppleStrategy from "passport-apple";

const strategy = new AppleStrategy(
  {
    clientID: "",
    teamID: "",
    callbackURL: "",
    keyID: "",
    privateKeyLocation: "",
    passReqToCallback: true,
  },
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
