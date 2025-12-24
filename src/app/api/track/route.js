import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Visitor from '@/models/Visitor';

export async function POST(request) {
  try {
    await dbConnect();
    
    const body = await request.json();
    const { ip, country, countryCode, region, city, userAgent, deviceType, path } = body;

    // Create a new visitor entry
    await Visitor.create({
      ip,
      country,
      countryCode,
      region,
      city,
      userAgent,
      deviceType,
      path,
      timestamp: new Date(),
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('Tracking Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
