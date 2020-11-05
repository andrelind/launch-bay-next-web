import { BluePrint } from '../types';
import { api } from './request';

export const setBlueprint = async (
  blueprint: BluePrint,
  access_token: string
) => {
  const copy = JSON.parse(JSON.stringify(blueprint));
  delete copy.launch_bay;

  const query = `mutation ($blueprint: BlueprintInput!) {
      blueprint(blueprint: $blueprint) {
        success
      }
    }`;

  return api(access_token, query, { blueprint: copy });
};

export const deleteBlueprint = async (uid: string, access_token: string) => {
  const query = `mutation ($uid: ID!) {
      removeBlueprint(uid: $uid) {
        success
      }
    }`;

  return api(access_token, query, { uid });
};
