import mongoose from 'mongoose';

export interface TUser extends mongoose.Document {
  uid: any;
  id: string;
  name: string;
  provider: string;
  email?: string;
}

const Schema = new mongoose.Schema<TUser>({
  uid: { type: String, required: true, index: true },
  id: { type: String, required: true },
  name: { type: String, required: true },
  provider: { type: String, required: true },
  email: { type: String },
});

const User = (conn: mongoose.Connection): mongoose.Model<TUser> =>
  conn.model('users', Schema);

export default User;
