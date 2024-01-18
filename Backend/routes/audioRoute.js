const express = require('express');
const audio = express.Router();
const {Audiobook} = require('../models/audioBookModel');
const {Course} = require("../models/courseModel");
// Create a new audiobook
audio.post('/post/:courseId', async (req, res) => {
    try {
        const courseId = req.params.courseId;
    
        // Check if the course exists
        const course = await Course.findById(courseId);
        if (!course) {
          return res.status(404).json({ error: 'Course not found' });
        }
    
        // Create the audiobook and associate it with the course
        const audiobook = await Audiobook.create(req.body);
        
        // Add the audiobook ID to the course's contents array
        course.contents.push(audiobook._id);
        await course.save();
    
        res.status(201).json(audiobook);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
});

// Get all audiobooks
audio.get('/get-all', async (req, res) => {
  try {
    const audiobooks = await Audiobook.find();
    res.json(audiobooks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific audiobook by ID
audio.get('/:id', async (req, res) => {
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
audio.patch('/:id', async (req, res) => {
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
audio.delete('/:courseId/:audioBookId', async (req, res) => {
    try {
        const audiobookId = req.params.audioBookId;
        const courseId = req.params.courseId
    
        // Find the audiobook to get its associated course ID
        const audiobook = await Audiobook.findById(audiobookId);
        if (!audiobook) {
          return res.status(404).json({ error: 'Audiobook not found' });
        }
    
    
        // Find the course and remove the audiobook ID from its contents array
        const course = await Course.findById(courseId);
        if (!course) {
          return res.status(404).json({ error: 'Course not found' });
        }
    
        // Remove the audiobook ID from the contents array
        course.contents = course.contents.filter(id => id.toString() !== audiobookId);
    
        // Save the updated course
        await course.save();
    
        // Delete the audiobook
        await Audiobook.findByIdAndDelete(audiobookId);
    
        res.status(204).json({"msg":"audioBook deleted"});
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
});

module.exports = {audio};
