const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const User = require('../models/User');

// GET student profile
router.get('/profile', protect, async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user);
});

// PUT update student profile
router.put('/profile', protect, async (req, res) => {
  const user = await User.findByIdAndUpdate(req.user.id, req.body, { new: true });
  res.json(user);
});

module.exports = router;
