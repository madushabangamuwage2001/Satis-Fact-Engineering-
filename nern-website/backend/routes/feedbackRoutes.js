// backend/routes/feedbackRoutes.js
const express  = require('express');
const Feedback = require('../models/Feedback');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const fb = await Feedback.create({ name, email, message });
    res.status(201).json(fb);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (_req, res) => {
  const list = await Feedback.find().sort({ createdAt: -1 });
  res.json(list);
});

module.exports = router;
