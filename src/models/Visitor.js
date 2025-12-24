import mongoose from 'mongoose';

const VisitorSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now,
  },
  ip: String,
  country: String,
  countryCode: String,
  region: String,
  city: String,
  latitude: Number,
  longitude: Number,
  accuracy: Number,
  locationSource: {
    type: String,
    enum: ['gps', 'ip'],
    default: 'ip',
  },
  userAgent: String,
  deviceType: String,
  path: String,
});

export default mongoose.models.Visitor || mongoose.model('Visitor', VisitorSchema);
