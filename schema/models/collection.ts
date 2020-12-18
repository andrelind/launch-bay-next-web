import mongoose from 'mongoose';

export interface TCollection extends mongoose.Document {
  userUid: string;
  expansions: any;
  ships: any;
  pilots: any;
  upgrades: any;
  timestamp: number;
}

const Schema = new mongoose.Schema<TCollection>({
  userUid: { type: String, required: true, index: true },
  expansions: Object,
  ships: Object,
  pilots: Object,
  upgrades: Object,
  timestamp: Number,
});

const Collection = (conn: mongoose.Connection): mongoose.Model<TCollection> =>
  conn.model('collections', Schema);

export default Collection;
