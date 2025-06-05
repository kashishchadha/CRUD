const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/users');
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  url: String
});
module.exports = mongoose.model('User', userSchema);