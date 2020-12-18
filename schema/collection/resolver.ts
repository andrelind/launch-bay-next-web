import { Context, generateTimestamp, getUser } from '../helpers';
import CollectionModel from './../models/collection';

const resolvers = {
  Query: {
    collection: async (_parent: any, _args: any, { ctx, db }: Context) => {
      const user = await getUser(ctx, db);

      const collection = await CollectionModel(db).findOne({
        userUid: user.uid,
      });

      if (!collection) {
        return {
          timestamp: 0,
          expansions: [],
          ships: [],
          pilots: [],
          upgrades: [],
        };
      }

      return {
        timestamp: collection.timestamp,
        expansions: collection.expansions || [],
        ships: collection.ships || [],
        pilots: collection.pilots || [],
        upgrades: collection.upgrades || [],
      };
    },
  },
  Mutation: {
    collection: async (
      _parent: any,
      { expansions, ships, pilots, upgrades }: any,
      { ctx, db }: Context
    ) => {
      const user = await getUser(ctx, db);

      // console.log({ expansions }, { ships }, { pilots }, { upgrades });
      const Collection = CollectionModel(db);
      const oldCollection = await Collection.findOne({ userUid: user.uid });
      if (oldCollection) {
        oldCollection.expansions = expansions || [];
        oldCollection.ships = ships || [];
        oldCollection.pilots = pilots || [];
        oldCollection.upgrades = upgrades || [];
        oldCollection.timestamp = generateTimestamp();
        await oldCollection.save();
        return { success: true, timestamp: oldCollection.timestamp };
      }
      const collection = new Collection();
      collection.userUid = user.uid;
      collection.expansions = expansions || [];
      collection.ships = ships || [];
      collection.pilots = pilots || [];
      collection.upgrades = upgrades || [];
      collection.timestamp = generateTimestamp();
      await collection.save();
      return { success: true, timestamp: collection.timestamp };
    },
  },
};

module.exports = resolvers;
