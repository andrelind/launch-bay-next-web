import mongoose from 'mongoose';

export interface TTournament extends mongoose.Document {
  uid: string;
  userUid: string;
  tournament: any;
}

const Schema = new mongoose.Schema<TTournament>({
  uid: { type: String, required: true, index: true },
  userUid: { type: String, required: true, index: true },
  tournament: Object,
});

const Tournament = (conn: mongoose.Connection): mongoose.Model<TTournament> =>
  conn.model('tournaments', Schema);

export default Tournament;
