import AppleStrategy from "passport-apple";
import { registerUser } from "../../requests/user";

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

    const result: any = await registerUser({
      id: decodedIdToken.sub,
      name: decodedIdToken.displayName,
      email: profile.emails.length > 0 ? profile.emails[0].value : undefined,
      provider: "Google",
      jwt: null,
    });

    cb(null, result.data.registerUser);
  }
);

export default strategy;
