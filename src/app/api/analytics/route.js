import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Visitor from '@/models/Visitor';

export async function GET() {
  try {
    await dbConnect();

    // 1. Total Visitors
    const totalVisitors = await Visitor.countDocuments();

    // 2. Visitors by Country
    const countries = await Visitor.aggregate([
      { $group: { _id: '$country', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]);

    // 3. Visitors by City
    const cities = await Visitor.aggregate([
      { $group: { _id: '$city', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]);

    // 4. Visitors Last 7 Days (for Graph)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    const recentViews = await Visitor.aggregate([
      { $match: { timestamp: { $gte: sevenDaysAgo } } },
      { 
        $group: { 
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$timestamp" } },
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    return NextResponse.json({
      totalVisitors,
      countries,
      cities,
      recentViews
    }, { status: 200 });

  } catch (error) {
    console.error('Analytics Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
