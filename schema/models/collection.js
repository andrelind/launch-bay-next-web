const mongoose = require('mongoose');

const { Schema } = mongoose;

const CollectionSchema = new Schema({
  userUid: { type: String, required: true, index: true },
  expansions: Object,
  ships: Object,
  pilots: Object,
  upgrades: Object,
  timestamp: Number,
});

module.exports = mongoose.model('Collection', CollectionSchema);
