export interface Team {
  id: string;
  name: string;
  owner: string;
  logo: string;
  colors: {
    primary: string;
    secondary: string;
  };
  history: {
    year: number;
    standing: number;
    wins: number;
    losses: number;
    champion: boolean;
  }[];
}

export interface Trade {
  id: string;
  date: string;
  teams: {
    teamId: string;
    received: {
      players: string[];
      picks: string[];
    };
    sent: {
      players: string[];
      picks: string[];
    };
  }[];
  notes?: string;
}

export interface Standings {
  year: number;
  teams: {
    teamId: string;
    wins: number;
    losses: number;
    pointsFor: number;
    pointsAgainst: number;
  }[];
}

export interface Champion {
  year: number;
  teamId: string;
  runnerUpId: string;
  score: string;
}