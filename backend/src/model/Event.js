const mongoose = require('mongoose');

const EventSchemma = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
});

module.exports = mongoose.model('Event', EventSchemma);
