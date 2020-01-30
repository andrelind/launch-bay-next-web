import { UserState } from '../reducers/user';
import { api } from './request';

export const registerUser = async (user: UserState) => {
  const query = `mutation ($id: String!, $name: String!, $email: String, $provider: String!) {
      registerUser(id: $id, name: $name, email: $email, provider: $provider) {
        id
        name
        provider
        email
        jwt
      }
    }`;

  return api(null, query, {
    id: user.id,
    name: user.name,
    email: user.email,
    provider: user.provider,
  });

  // return request(query, user, {
  //   id: user.id,
  //   name: user.name,
  //   email: user.email,
  //   provider: user.provider,
  // });
};
