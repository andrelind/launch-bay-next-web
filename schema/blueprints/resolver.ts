import { ApolloError } from 'apollo-server-micro';
import { Context, generateTimestamp, getUser } from '../helpers';
import Blueprint from '../models/blueprint';
import DeletedBlueprint from '../models/deletedBlueprint';

const resolvers = {
  Query: {
    blueprints: async (_parent: any, _args: any, { ctx, db }: Context) => {
      const user = await getUser(ctx, db);
      const blueprints = await Blueprint(db).find({ userUid: user.uid });
      return blueprints.map((o) => o.blueprint);
    },
    removedBlueprints: async (
      _parent: any,
      _args: any,
      { ctx, db }: Context
    ) => {
      const user = await getUser(ctx, db);
      const deleted = await DeletedBlueprint(db).find({ userUid: user.uid });
      return (deleted || []).map((o) => o.uid);
    },
  },
  Mutation: {
    async blueprint(_parent: any, { blueprint }: any, { ctx, db }: Context) {
      const user = await getUser(ctx, db);
      if (!blueprint.uid) {
        throw new ApolloError('No uid supplied');
      }

      const BP = Blueprint(db);

      const current = await BP.findOne({
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

      const object = new BP();
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

    async removeBlueprint(_parent: any, { uid }: any, { ctx, db }: Context) {
      const user = await getUser(ctx, db);
      await Blueprint(db).findOneAndRemove({ uid, userUid: user.uid });

      const DBP = DeletedBlueprint(db);
      const alreadyDeleted = await DBP.findOne({
        uid,
        userUid: user.uid,
      });
      if (!alreadyDeleted) {
        const deletedRecord = new DBP();
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
