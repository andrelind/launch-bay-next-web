import { SquadronXWS } from '../types';
import { api } from './request';

export const setSquadron = async (
  squadron: SquadronXWS,
  access_token: string
) => {
  if (squadron.version === '2.0.0') {
    return;
  }

  const query = `mutation ($squadron: SquadronInput!) {
      set(squadron: $squadron) {
        success
      }
    }`;

  const s = {
    uid: squadron.uid,
    name: squadron.name,
    faction: squadron.faction,
    format: squadron.format,
    version: squadron.version,
    description: squadron.description,
    cost: squadron.cost,
    favourite: squadron.favourite,
    createdDatestamp: squadron.createdDatestamp,
    wins: squadron.wins || 0,
    losses: squadron.losses || 0,
    pilots: squadron.pilots.map(p => ({
      uid: p.uid,
      name: p.name,
      ship: p.ship,
      upgrades: p.upgrades,
    })),
  };

  return api(access_token, query, { squadron: s });
};

export const deleteSquadron = async (uid: string, access_token: string) => {
  const query = `mutation ($uid: ID!) {
      remove(uid: $uid) {
        success
      }
    }`;

  return api(access_token, query, { uid });
};
