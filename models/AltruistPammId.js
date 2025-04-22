const mongoose = require('mongoose');

// Corrected schema for panaltruist
const panaltruistSchema = new mongoose.Schema({
    shopName: { type: String, required: true },  // Changed to String
    name: { type: String, required: true },  // Changed to String
    email: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    panCardNo: { type: String, required: true },  // Changed to String
    aadharCardNo: { type: String, required: true },  // Changed to String
    panCardUpload: { type: String, required: false },  // Changed to String for storing filename
    aadharCardUpload: { type: String, required: false },  // Changed to String for storing filename
    pan_option: { type: String, required: true },  // Changed to String
});

module.exports = mongoose.model('Altruist', panaltruistSchema);
