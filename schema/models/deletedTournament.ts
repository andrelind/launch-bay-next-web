import mongoose from 'mongoose';

export interface TDeletedTournament extends mongoose.Document {
  uid: string;
  userUid: string;
  timestamp: number;
}

const Schema = new mongoose.Schema<TDeletedTournament>({
  uid: { type: String, required: true, index: true },
  userUid: { type: String, required: true, index: true },
  timestamp: Number,
});

const DeletedTournament = (
  conn: mongoose.Connection
): mongoose.Model<TDeletedTournament> =>
  conn.model('deletedtournaments', Schema);

export default DeletedTournament;
