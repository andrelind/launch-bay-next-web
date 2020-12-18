import mongoose from 'mongoose';

export interface TDeletedBlueprint extends mongoose.Document {
  uid: string;
  userUid: string;
  timestamp: number;
}

const Schema = new mongoose.Schema<TDeletedBlueprint>({
  uid: { type: String, required: true, index: true },
  userUid: { type: String, required: true, index: true },
  timestamp: Number,
});

const DeletedBlueprint = (
  conn: mongoose.Connection
): mongoose.Model<TDeletedBlueprint> => conn.model('deletedblueprints', Schema);

export default DeletedBlueprint;
