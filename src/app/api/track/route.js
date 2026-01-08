import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Visitor from '@/models/Visitor';

export async function POST(request) {
  try {
    await dbConnect();
    
    const body = await request.json();
    const { ip, country, countryCode, region, city, latitude, longitude, accuracy, locationSource, userAgent, deviceType, path } = body;

    const visitorData = {
      ip,
      country,
      countryCode,
      region,
      city,
      latitude,
      longitude,
      accuracy,
      locationSource,
      userAgent,
      deviceType,
      path,
      timestamp: new Date(),
    };

    const result = await Visitor.create(visitorData);
    console.log('Visitor tracked successfully:', result._id);

    return NextResponse.json({ success: true, visitorId: result._id }, { status: 201 });
  } catch (error) {
    console.error('Tracking Error:', error.message, error.stack);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
