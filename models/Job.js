const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    id: String,
job_title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
mode: {
    type: String,
    required: true
  },
  job_description: {
    type: String,
    required: true
  },
  
  requirements: {
    type: [String], // Array of strings
    required: true
  },
 
currency
: {
    type: String,
    required: true
  },
  employment_type
: {
    type: String,
    required: true
  },
  experience
: {
    type: String,
    required: true
  },
  
date_posted
: {
    type: Date,
    default: Date.now
  }
  // Add more fields as needed
});

module.exports = mongoose.model('job', JobSchema);
