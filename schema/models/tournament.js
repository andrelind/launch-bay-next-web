const mongoose = require('mongoose');

const { Schema } = mongoose;

const TournamentSchema = new Schema({
  uid: { type: String, required: true, index: true },
  userUid: { type: String, required: true, index: true },
  tournament: Object,
});

module.exports = mongoose.model('Tournament', TournamentSchema);
