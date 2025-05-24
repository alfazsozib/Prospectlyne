const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const Application = require('../models/Application');
const Job = require('../models/Job');

// View applicants for a job
router.get('/applicants/:jobId', protect, async (req, res) => {
  const applications = await Application.find({ job: req.params.jobId }).populate('student');
  res.json(applications);
});

// Accept/Reject
router.put('/applicants/:appId', protect, async (req, res) => {
  const application = await Application.findByIdAndUpdate(req.params.appId, { status: req.body.status }, { new: true });
  res.json(application);
});

module.exports = router;
