// routes/jobs.js
const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// Route to fetch all jobs
router.get('/jobs', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to fetch a job by ID
router.get('/jobs/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.json(job);
  } catch (error) {
    console.error(error);
    if (error.kind === 'ObjectId') {
      return res.status(400).json({ error: 'Invalid job ID' });
    }
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to post a new job
router.post('/jobs', async (req, res) => {
  try {
    const {
      job_title,
      company,
      location,
      mode,
      job_description,
      requirements,
      currency,
      employment_type,
      experience,
      date_posted
    } = req.body;

    // Validate required fields
    if (!job_title || !company || !location || !mode || !job_description || !currency || !employment_type || !experience) {
      return res.status(400).json({ error: 'All required fields must be provided' });
    }

    // Create a new job entry
    const newJob = new Job({
      job_title,
      company,
      location,
      mode,
      job_description,
      requirements,
      currency,
      employment_type,
      experience,
      date_posted
    });

    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
