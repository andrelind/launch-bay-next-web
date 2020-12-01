import { create } from "apisauce";

export const api = (
  access_token: string | null,
  query: string,
  variables?: Object
) => {
  return create({
    baseURL: "https://launchbaynext.app",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-jwt": access_token,
    },
  })
    .post("api/graphql", JSON.stringify({ query, variables }))
    .then((r) => r.data);
};
