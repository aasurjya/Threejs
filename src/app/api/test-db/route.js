import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Visitor from '@/models/Visitor';

export async function GET() {
  try {
    await dbConnect();
    
    const count = await Visitor.countDocuments();
    
    return NextResponse.json({
      success: true,
      message: 'MongoDB connection successful',
      totalVisitors: count,
      timestamp: new Date().toISOString(),
    }, { status: 200 });
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json({
      success: false,
      error: error.message,
      details: error.toString(),
    }, { status: 500 });
  }
}
