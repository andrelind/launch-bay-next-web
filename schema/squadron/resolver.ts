import { ApolloError } from 'apollo-server-micro';
import { isBefore, subDays } from 'date-fns';
import { Context, generateTimestamp, getUser } from '../helpers';
import DeletedModel from './../models/deleted';
import SquadronModel from './../models/squadron';

// const { Squadron, Deleted } = require('../models');

const resolvers = {
  Query: {
    squadron: async (_parent: any, _args: any, { ctx, db }: Context) => {
      try {
        const squadron = await SquadronModel(db).findOne({ uid: ctx.uid });
        return squadron?.squadron;
      } catch (error) {
        throw new ApolloError('Error retrieving squadron');
      }
    },

    squadrons: async (_parent: any, _args: any, { ctx, db }: Context) => {
      const user = await getUser(ctx, db);
      const squadrons = await SquadronModel(db).find({ userUid: user.uid });
      return squadrons.map((o) => o.squadron);
    },

    removed: async (_parent: any, _args: any, { ctx, db }: Context) => {
      const user = await getUser(ctx, db);

      const Deleted = DeletedModel(db);
      const deleted = await Deleted.find({ userUid: user.uid });

      if (deleted) {
        const refDate = subDays(new Date(), 14);
        await Promise.all(
          deleted.map(async (d) => {
            const date = new Date(d.timestamp * 1000);
            if (isBefore(date, refDate)) {
              await Deleted.deleteOne({ uid: d.uid });
            }
          })
        );
      }

      return (deleted || []).map((o) => o.uid);
    },
  },
  Mutation: {
    set: async (_parent: any, { squadron }: any, { ctx, db }: Context) => {
      const user = await getUser(ctx, db);
      if (!squadron.uid) {
        throw new ApolloError('No uid supplied');
      }

      const Squadron = SquadronModel(db);

      const current = await Squadron.findOne({
        uid: squadron.uid,
        userUid: user.uid,
      });
      if (current) {
        current.squadron = squadron;

        try {
          await current.save();
          return { success: true };
        } catch (error) {
          console.error(error);
          return { success: false };
        }
      }

      const object = new Squadron();
      object.uid = squadron.uid;
      object.userUid = user.uid;
      object.squadron = squadron;

      try {
        await object.save();
        return { success: true };
      } catch (error) {
        console.error(error);
        return { success: false };
      }
    },

    remove: async (_parent: any, { uid }: any, { ctx, db }: Context) => {
      const user = await getUser(ctx, db);

      const Deleted = DeletedModel(db);
      await SquadronModel(db).findOneAndRemove({ uid, userUid: user.uid });

      const alreadyDeleted = await Deleted.findOne({ uid, userUid: user.uid });
      if (!alreadyDeleted) {
        const deletedRecord = new Deleted();
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
