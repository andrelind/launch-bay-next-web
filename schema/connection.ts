import mongoose from 'mongoose';

const uri = process.env.DB_URI;
let conn: mongoose.Connection | null = null;

export const getConnection = async (): Promise<mongoose.Connection> => {
  if (conn == null) {
    conn = await mongoose.createConnection(uri as string, {
      bufferCommands: false, // Disable mongoose buffering
      bufferMaxEntries: 0, // and MongoDB driver buffering
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  }
  return conn;
};
