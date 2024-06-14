const mongoose = require("mongoose");

const JobsAppliedSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  jobsApplied: Array,
});

module.exports = mongoose.model('JobsApplied', JobsAppliedSchema);