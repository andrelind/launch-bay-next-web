import mongoose from 'mongoose';

export interface TBlueprint extends mongoose.Document {
  uid: string;
  userUid: string;
  blueprint: any;
}

const Schema = new mongoose.Schema<TBlueprint>({
  uid: { type: String, required: true, index: true },
  userUid: { type: String, required: true, index: true },
  blueprint: Object,
});

const Blueprint = (conn: mongoose.Connection): mongoose.Model<TBlueprint> =>
  conn.model('blueprints', Schema);

export default Blueprint;
