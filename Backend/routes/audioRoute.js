const express = require('express');
const audio = express.Router();
const Audiobook = require('../models/Audiobook');

// Create a new audiobook
audio.post('/audiobooks', async (req, res) => {
  try {
    const audiobook = new Audiobook(req.body);
    await audiobook.save();
    res.status(201).json(audiobook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all audiobooks
audio.get('/audiobooks', async (req, res) => {
  try {
    const audiobooks = await Audiobook.find();
    res.json(audiobooks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific audiobook by ID
audio.get('/audiobooks/:id', async (req, res) => {
  try {
    const audiobook = await Audiobook.findById(req.params.id);
    if (!audiobook) {
      return res.status(404).json({ error: 'Audiobook not found' });
    }
    res.json(audiobook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an audiobook by ID
audio.patch('/audiobooks/:id', async (req, res) => {
  try {
    const audiobook = await Audiobook.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!audiobook) {
      return res.status(404).json({ error: 'Audiobook not found' });
    }
    res.json(audiobook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete an audiobook by ID
audio.delete('/audiobooks/:id', async (req, res) => {
  try {
    const audiobook = await Audiobook.findByIdAndDelete(req.params.id);
    if (!audiobook) {
      return res.status(404).json({ error: 'Audiobook not found' });
    }
    res.json({ message: 'Audiobook deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
