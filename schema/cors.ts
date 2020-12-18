/**
 * Example:
 * APOLLO_SERVER_CORS_WHITELIST=http://localhost:5000,https://www.my-client.org
 * => parse the string and makes it an array
 * @param {*} variable Env array variables, with values separated by a comma (spaces allowed)
 */
export const parseEnvVariableArray = (variable = '') => {
  return variable.split(',').map((s) => s.trim());
};

import debug from 'debug';
const debugCors = debug('vns:cors');

const corsWhitelist = parseEnvVariableArray(process.env.CORS_WHITELIST);

/**
 * Accept same origin queries, and
 */
const corsOptions = {
  origin: function (origin: any, callback: any) {
    debugCors('Origin is', origin, 'Allowed origins are ', corsWhitelist);
    if (!origin) {
      // same origin
      callback(null, true);
    } else if (corsWhitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error(`Not allowed by CORS ${origin}`));
    }
  },
};

export default corsOptions;
