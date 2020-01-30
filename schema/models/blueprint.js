const mongoose = require('mongoose');

const { Schema } = mongoose;

const BlueprintSchema = new Schema({
  uid: { type: String, required: true, index: true },
  userUid: { type: String, required: true, index: true },
  blueprint: Object,
});

module.exports = mongoose.model('Blueprint', BlueprintSchema);
