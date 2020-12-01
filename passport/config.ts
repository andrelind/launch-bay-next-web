import { StrategyOption as FacebookStrategy } from "passport-facebook";
import { IOAuthStrategyOption as GoogleStrategy } from "passport-google-oauth";

export interface AppConfig {
  isDevelopment: boolean;
  hostingURL: string;
  facebook: FacebookStrategy;
  google: GoogleStrategy;
}

const getOAuthUrls: (
  hostName: string,
  app: string
) => { callbackURL: string } = (hostName: string, app: string) => ({
  callbackURL: `${hostName}/api/auth/callback/${app}`,
});

const isDevelopment = process.env.NODE_ENV !== "production";
if (isDevelopment) {
  require("dotenv").config();
}

const hostingURL = process.env.HOSTING_URL || "http://localhost:3000";

const appConfig: AppConfig = {
  isDevelopment,
  hostingURL,
  facebook: {
    clientID: process.env.FACEBOOK_ID as string,
    clientSecret: process.env.FACEBOOK_SECRET as string,
    ...getOAuthUrls(hostingURL, "facebook"),
    profileFields: ["id", "displayName", "email"],
  },
  google: {
    clientID: process.env.GOOGLE_ID as string,
    clientSecret: process.env.GOOGLE_SECRET as string,
    ...getOAuthUrls(hostingURL, "google"),
    // @ts-ignore
    scope: ["profile", "email"],
  },
  apple: {
    clientID: "se.andrelind.launch-bay-web",
    teamID: "Y7Z9KZ84C6",
    ...getOAuthUrls(hostingURL, "apple"),
    keyID: "AX2B5PQWDU",
    privateKeyLocation: "../public/keys/AuthKey_AX2B5PQWDU.p8",
    passReqToCallback: true,
  },
};

export default appConfig;
