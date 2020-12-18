import mongoose from 'mongoose';

export interface TDeleted extends mongoose.Document {
  uid: string;
  userUid: string;
  timestamp: number;
}

const Schema = new mongoose.Schema<TDeleted>({
  uid: { type: String, required: true, index: true },
  userUid: { type: String, required: true, index: true },
  timestamp: Number,
});

const Deleted = (conn: mongoose.Connection): mongoose.Model<TDeleted> =>
  conn.model('deleteds', Schema);

export default Deleted;
