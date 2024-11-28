import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  location: {
    address: String,
    city: String,
    state: String,
    zipCode: String
  },
  features: {
    bedrooms: Number,
    bathrooms: Number,
    squareFeet: Number
  },
  images: [String],
  userId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

propertySchema.index({ 'location.city': 'text', 'location.state': 'text', 'location.zipCode': 'text' });
export default mongoose.model('Property', propertySchema);