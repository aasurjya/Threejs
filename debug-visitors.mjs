import mongoose from 'mongoose';

// Simple script to check visitor count
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('MONGODB_URI not found');
  process.exit(1);
}

const VisitorSchema = new mongoose.Schema({
  timestamp: Date,
  ip: String,
  country: String,
  countryCode: String,
  region: String,
  city: String,
  latitude: Number,
  longitude: Number,
  accuracy: Number,
  locationSource: { type: String, enum: ['gps', 'ip'], default: 'ip' },
  userAgent: String,
  deviceType: String,
  path: String,
});

const Visitor = mongoose.models.Visitor || mongoose.model('Visitor', VisitorSchema);

async function debugVisitors() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const count = await Visitor.countDocuments();
    console.log('Total visitors in database:', count);

    const recent = await Visitor.find({}).sort({ timestamp: -1 }).limit(5);
    console.log('\nLatest 5 visitors:');
    recent.forEach((visitor, idx) => {
      console.log(`${idx + 1}. ${visitor.timestamp} - ${visitor.city}, ${visitor.region} (${visitor.locationSource})`);
    });

    await mongoose.disconnect();
  } catch (error) {
    console.error('Error:', error.message);
  }
}

debugVisitors();
