import { ApolloError } from 'apollo-server-micro';
import { Context, generateTimestamp, getUser } from '../helpers';
import DeletedTournamentModel from '../models/deletedTournament';
import TournamentModel from '../models/tournament';

const resolvers = {
  Query: {
    tournaments: async (_parent: any, _args: any, { ctx, db }: Context) => {
      const user = await getUser(ctx, db);
      const tournaments = await TournamentModel(db).find({ userUid: user.uid });
      return tournaments.map((o) => o.tournament);
    },

    removedTournaments: async (
      _parent: any,
      _args: any,
      { ctx, db }: Context
    ) => {
      const user = await getUser(ctx, db);
      const DeletedTournament = DeletedTournamentModel(db);
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

      return (deleted || []).map((o) => o.uid);
    },
  },
  Mutation: {
    setTournament: async (
      _parent: any,
      { tournament }: any,
      { ctx, db }: Context
    ) => {
      const user = await getUser(ctx, db);
      if (!tournament.uid) {
        throw new ApolloError('No uid supplied');
      }

      const Tournament = TournamentModel(db);
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

    removeTournament: async (
      _parent: any,
      { uid }: any,
      { ctx, db }: Context
    ) => {
      const user = await getUser(ctx, db);
      await TournamentModel(db).findOneAndRemove({ uid, userUid: user.uid });

      const DeletedTournament = DeletedTournamentModel(db);
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
