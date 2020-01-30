const { getUser, generateTimestamp } = require('../helpers');
const { Tournament, DeletedTournament } = require('../models');

const resolvers = {
  Query: {
    async tournaments(test, input, ctx) {
      const user = await getUser(ctx);
      const tournaments = await Tournament.find({ userUid: user.uid });
      return tournaments.map(o => o.tournament);
    },

    async removedTournaments(parent, args, ctx, info) {
      const user = await getUser(ctx);
      const deleted = await DeletedTournament.find({ userUid: user.uid });

      if (deleted) {
        for (var i = 1; i < deleted.length; i++) {
          const d = deleted[i];
          const checkDate = new Date();
          checkDate.setDate(checkDate.getDate() - 14);

          const date = new Date(d.timestamp * 1000);
          if (date < checkDate) {
            await DeletedTournament.findOneAndRemove({
              uid: d.uid,
              userUid: user.uid,
            });
          }
        }
      }

      return (deleted || []).map(o => o.uid);
    },
  },
  Mutation: {
    async setTournament(parent, { tournament }, ctx, info) {
      const user = await getUser(ctx);

      if (!tournament.uid) {
        throw new Error('No uid supplied');
      }

      const current = await Tournament.findOne({
        uid: tournament.uid,
        userUid: user.uid,
      });
      if (current) {
        current.tournament = tournament;

        try {
          await current.save();
          return { success: true };
        } catch (error) {
          return { success: false };
        }
      }

      const object = new Tournament();
      object.uid = tournament.uid;
      object.userUid = user.uid;
      object.tournament = tournament;

      try {
        await object.save();
        return { success: true };
      } catch (error) {
        return { success: false };
      }
    },

    async removeTournament(parent, { uid }, ctx, info) {
      const user = await getUser(ctx);

      await Tournament.findOneAndRemove({ uid, userUid: user.uid });

      const alreadyDeleted = await DeletedTournament.findOne({
        uid,
        userUid: user.uid,
      });
      if (!alreadyDeleted) {
        const deletedRecord = new DeletedTournament();
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
