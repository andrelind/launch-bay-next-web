const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  uid: { type: String, required: true, index: true },
  id: { type: String, required: true },
  name: { type: String, required: true },
  provider: { type: String, required: true },
  email: { type: String },
});

module.exports = mongoose.model('User', UserSchema);
