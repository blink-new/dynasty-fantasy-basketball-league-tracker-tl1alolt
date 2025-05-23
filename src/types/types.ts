export interface TeamStats {
  wins: number;
  losses: number;
  championships: number;
  playoffAppearances: number;
  bestSeason: string;
}

export interface TeamData {
  id: string;
  name: string;
  owner: string;
  logoUrl: string;
  stats: TeamStats;
  founded: string;
}

export interface Trade {
  id: string;
  date: string;
  teamA: string;
  teamB: string;
  teamAReceives: string[];
  teamBReceives: string[];
}

export interface Champion {
  year: string;
  team: string;
  owner: string;
  record: string;
  mvp: string;
}

export interface Standings {
  teamId: string;
  teamName: string;
  wins: number;
  losses: number;
  winPercentage: number;
  pointsFor: number;
  pointsAgainst: number;
  streak: string;
  lastTen: string;
}