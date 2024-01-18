const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: String,
  instructor: String,
  length:Number,
  description:String,
  coverImage:String, //  URL for the image
  contents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Audiobook', //  model for audiobooks/articles
  }],
});

const Course = mongoose.model('Course', courseSchema);

module.exports = {Course};
