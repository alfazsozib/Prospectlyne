const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const Job = require('../models/Job');
const Application = require('../models/Application');

// Post a job
router.post('/', protect, async (req, res) => {
  const job = await Job.create({ ...req.body, postedBy: req.user.id });
  res.json(job);
});

// List jobs
router.get('/', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// Apply for job
router.post('/apply/:jobId', protect, async (req, res) => {
  const application = await Application.create({
    student: req.user.id,
    job: req.params.jobId,
    resume: req.body.resume
  });
  res.json(application);
});

module.exports = router;
