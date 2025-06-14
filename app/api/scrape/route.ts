import { NextResponse } from 'next/server';

export async function GET() {
  const mockData = {
    matches: [
      {
        teamA: 'RCB',
        teamB: 'MI',
        time: '7:30 PM',
        venue: 'Chinnaswamy Stadium',
        status: 'upcoming',
      },
    ],
    pointsTable: [
      { team: 'KKR', played: 14, wins: 9, losses: 5, points: 18, netRunRate: '+1.428' },
      { team: 'SRH', played: 14, wins: 8, losses: 6, points: 16, netRunRate: '+0.414' },
    ],
    schedule: [
      { date: 'Apr 10', match: 'RCB vs MI', venue: 'Bengaluru' },
      { date: 'Apr 11', match: 'GT vs CSK', venue: 'Ahmedabad' },
    ],
  };

  return NextResponse.json(mockData);
}
