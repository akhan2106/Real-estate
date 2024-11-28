import express from 'express';
import Property from '../models/Property.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Get all properties
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Search properties
router.get('/search', async (req, res) => {
  const { query } = req.query;
  try {
    const properties = await Property.find({
      $or: [
        { 'location.city': new RegExp(query, 'i') },
        { 'location.state': new RegExp(query, 'i') },
        { 'location.zipCode': new RegExp(query, 'i') }
      ]
    });
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create property
router.post('/', auth, async (req, res) => {
  const property = new Property({
    ...req.body,
    userId: req.user.uid
  });

  try {
    const newProperty = await property.save();
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;