const mongoose = require('mongoose');

const { Schema } = mongoose;

const FeedbackSchema = new Schema({
  mail: String,
  text: String,
  timestamp: Number,
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
