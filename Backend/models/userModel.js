const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name:String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course', // Assuming you have a Course model for relevant courses
  }],
});

const User = mongoose.model('User', userSchema);

module.exports = {User};
