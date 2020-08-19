const { getUser, generateTimestamp } = require('../helpers');
const { Squadron, Deleted } = require('../models');

const resolvers = {
  Query: {
    async squadron(parent, { uid }) {
      const squadron = await Squadron.findOne({ uid });
      return squadron.squadron;
    },

    async squadrons(test, input, ctx) {
      const user = await getUser(ctx);
      const squadrons = await Squadron.find({ userUid: user.uid });
      return squadrons.map(o => o.squadron);
    },

    async removed(parent, args, ctx) {
      const user = await getUser(ctx);
      const deleted = await Deleted.find({ userUid: user.uid });

      if (deleted) {
        for (var i = 1; i < deleted.length; i++) {
          const d = deleted[i];
          const checkDate = new Date();
          checkDate.setDate(checkDate.getDate() - 14);

          const date = new Date(d.timestamp * 1000);
          if (date < checkDate) {
            await Deleted.findOneAndRemove({ uid: d.uid, userUid: user.uid });
          }
        }
      }

      return (deleted || []).map(o => o.uid);
    },
  },
  Mutation: {
    async set(parent, { squadron }, ctx) {
      const user = await getUser(ctx);

      if (!squadron.uid) {
        throw new Error('No uid supplied');
      }

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

    async remove(parent, { uid }, ctx) {
      const user = await getUser(ctx);

      await Squadron.findOneAndRemove({ uid, userUid: user.uid });

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
