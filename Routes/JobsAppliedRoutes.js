const express = require('express');
const router = express.Router();
const {
  addToJobsApplied,
  getJobsApplied,
} = require('../controllers/JobsApplied');

router.post('/add', addToJobsApplied);
router.get("/jobsApplies/:email",  getJobsApplied);
module.exports = router;