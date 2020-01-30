const { getUser, generateTimestamp } = require('../helpers');
const { Collection, DeletedBlueprint } = require('../models');

const resolvers = {
  Query: {
    async collection(parent, args, ctx, info) {
      const user = await getUser(ctx);
      const collection = await Collection.findOne({ userUid: user.uid });

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
    async collection(
      parent,
      { expansions, ships, pilots, upgrades },
      ctx,
      info
    ) {
      const user = await getUser(ctx);

      // console.log({ expansions }, { ships }, { pilots }, { upgrades });

      const oldCollection = await Collection.findOne({ userUid: user.uid });
      if (oldCollection) {
        oldCollection.expansions = expansions || [];
        oldCollection.ships = ships || [];
        oldCollection.pilots = pilots || [];
        oldCollection.upgrades = upgrades || [];
        oldCollection.timestamp = generateTimestamp();
        delete oldCollection.items;
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
