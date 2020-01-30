const { getUser, generateTimestamp } = require('../helpers');
const { Blueprint, DeletedBlueprint } = require('../models');

const resolvers = {
  Query: {
    async blueprints(parent, args, ctx, info) {
      const user = await getUser(ctx);
      const blueprints = await Blueprint.find({ userUid: user.uid });
      return blueprints.map(o => o.blueprint);
    },
    async removedBlueprints(parent, args, ctx, info) {
      const user = await getUser(ctx);
      const deleted = await DeletedBlueprint.find({ userUid: user.uid });
      return (deleted || []).map(o => o.uid);
    },
  },
  Mutation: {
    async blueprint(parent, { blueprint }, ctx, info) {
      const user = await getUser(ctx);

      if (!blueprint.uid) {
        throw new Error('No uid supplied');
      }

      const current = await Blueprint.findOne({
        uid: blueprint.uid,
        userUid: user.uid,
      });
      if (current) {
        current.blueprint = blueprint;

        try {
          await current.save();
          return { success: true };
        } catch (error) {
          return { success: false };
        }
      }

      const object = new Blueprint();
      object.uid = blueprint.uid;
      object.userUid = user.uid;
      object.blueprint = blueprint;

      try {
        await object.save();
        return { success: true };
      } catch (error) {
        return { success: false };
      }
    },

    async removeBlueprint(parent, { uid }, ctx, info) {
      const user = await getUser(ctx);
      await Blueprint.findOneAndRemove({ uid, userUid: user.uid });

      const alreadyDeleted = await DeletedBlueprint.findOne({
        uid,
        userUid: user.uid,
      });
      if (!alreadyDeleted) {
        const deletedRecord = new DeletedBlueprint();
        deletedRecord.uid = uid;
        deletedRecord.userUid = user.uid;
        deletedRecord.timestamp = generateTimestamp();
        await deletedRecord.save();
        return { success: true, timestamp: deletedRecord.timestamp };
      }

      return { success: true, timestamp: alreadyDeleted.timestamp };
    },
  },
};

module.exports = resolvers;
