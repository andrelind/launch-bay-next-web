const mongoose = require('mongoose');

const { Schema } = mongoose;

const SquadronSchema = new Schema({
  uid: { type: String, required: true, index: true },
  userUid: { type: String, required: true, index: true },
  squadron: Object,
});

module.exports = mongoose.model('Squadron', SquadronSchema);
