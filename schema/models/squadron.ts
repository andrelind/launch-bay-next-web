import mongoose from 'mongoose';

export interface TSquadron extends mongoose.Document {
  uid: string;
  userUid: string;
  squadron: any;
}

const Schema = new mongoose.Schema<TSquadron>({
  uid: { type: String, required: true, index: true },
  userUid: { type: String, required: true, index: true },
  squadron: Object,
});

const Squadron = (conn: mongoose.Connection): mongoose.Model<TSquadron> =>
  conn.model('squadrons', Schema);

export default Squadron;

// module.exports =
//   mongoose.models['Squadron'] ||
//   mongoose.model('Squadron', SquadronSchema, undefined, true);
