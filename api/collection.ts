import { CollectionState } from '../reducers/collection';
import { api } from './request';

export const setCollection = async (
  collection: CollectionState,
  access_token: string
) => {
  const query = `mutation ($expansions: [CollectionItemInput], $ships: [CollectionItemInput], $pilots: [CollectionItemInput], $upgrades: [CollectionItemInput]) {
      collection(expansions: $expansions, ships: $ships, pilots: $pilots, upgrades: $upgrades) {
        success
      }
    }`;

  const expansions = Object.keys(collection.expansions || {}).map(key => ({
    id: key,
    count: collection.expansions[key],
  }));
  const ships = Object.keys(collection.ships || {}).map(key => ({
    id: key,
    count: collection.ships[key],
  }));
  const pilots = Object.keys(collection.pilots || {}).map(key => ({
    id: key,
    count: collection.pilots[key],
  }));
  const upgrades = Object.keys(collection.upgrades || {}).map(key => ({
    id: key,
    count: collection.upgrades[key],
  }));

  return api(access_token, query, {
    expansions,
    ships,
    pilots,
    upgrades,
  });
};
