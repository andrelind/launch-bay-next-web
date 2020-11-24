import Iron from "@hapi/iron";
import { NextApiRequest } from "next";
import { getTokenCookie } from "./auth-cookies";

// Use an environment variable here instead of a hardcoded value for production
const TOKEN_SECRET = process.env.JWT_SECRET || "";

export function encryptSession(session: any) {
  return Iron.seal(session, TOKEN_SECRET, Iron.defaults);
}

export async function getSession(req: NextApiRequest) {
  const token = getTokenCookie(req);
  return token && Iron.unseal(token, TOKEN_SECRET, Iron.defaults);
}
