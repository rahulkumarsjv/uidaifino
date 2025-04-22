// Define the schema
const mongoose = require('mongoose');

const EnrollmentSchema = new mongoose.Schema({
  enrollmentNumber: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Define the model
const Enrollment = mongoose.model('Enrollment', EnrollmentSchema);
