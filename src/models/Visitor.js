import mongoose from 'mongoose';

const VisitorSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now,
  },
  ip: String,
  country: String,
  countryCode: String,
  region: String, // State
  city: String,
  userAgent: String,
  deviceType: String, // mobile, desktop, tablet
  path: String,
});

export default mongoose.models.Visitor || mongoose.model('Visitor', VisitorSchema);
