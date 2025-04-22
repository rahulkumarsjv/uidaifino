const mongoose = require('mongoose');

const adminUserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const AdminUser = mongoose.model('AdminUser', adminUserSchema);

module.exports = AdminUser;
