export interface Match {
    teamA: string;
    teamB: string;
    time: string;
    venue: string;
    status: 'live' | 'upcoming';
  }
  
  export interface TeamStanding {
    team: string;
    played: number;
    wins: number;
    losses: number;
    points: number;
    netRunRate: string;
  }
  
  export interface ScheduleEntry {
    date: string;
    match: string;
    venue: string;
  }
  