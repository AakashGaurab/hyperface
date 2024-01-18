const mongoose = require('mongoose');

const audiobookSchema = new mongoose.Schema({
  title: String,
  author:String,
  length: Number,
  summary: String,
  coverImage: String, // URL for the image
  audioFileURL: String, // URL for the audiobook file
});

const Audiobook = mongoose.model('Audiobook', audiobookSchema);

module.exports = {Audiobook};
