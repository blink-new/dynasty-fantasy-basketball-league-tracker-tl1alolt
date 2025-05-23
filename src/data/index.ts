// Types for our data
export interface Team {
  id: number;
  name: string;
  logo: string;
  owner: string;
  history: {
    championships: number;
    runnerUps: number;
    playoffAppearances: number;
    seasonWins: number;
    seasonLosses: number;
    bestFinish: string;
  };
  color: string;
}

export interface Trade {
  id: number;
  date: string;
  teams: {
    teamId: number;
    received: string[];
    gave: string[];
  }[];
}

export interface Standing {
  teamId: number;
  wins: number;
  losses: number;
  winPercentage: number;
  pointsFor: number;
  pointsAgainst: number;
  streak: string;
  last10: string;
}

export interface Champion {
  year: number;
  teamId: number;
  runnerUpId: number;
  mvp: string;
  record: string;
  pointsScored: number;
}

// Mock data for teams
export const teams: Team[] = [
  {
    id: 1,
    name: "Dynasty Dominators",
    logo: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    owner: "Alex Johnson",
    history: {
      championships: 3,
      runnerUps: 2,
      playoffAppearances: 8,
      seasonWins: 102,
      seasonLosses: 58,
      bestFinish: "Champion (2019, 2021, 2023)"
    },
    color: "#FF5733"
  },
  {
    id: 2,
    name: "Slam Dunkers",
    logo: "https://images.unsplash.com/photo-1546519638-68e109acd27d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    owner: "Sam Wilson",
    history: {
      championships: 2,
      runnerUps: 3,
      playoffAppearances: 7,
      seasonWins: 98,
      seasonLosses: 62,
      bestFinish: "Champion (2018, 2022)"
    },
    color: "#3498DB"
  },
  {
    id: 3,
    name: "Three-Point Kings",
    logo: "https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    owner: "Mike Thompson",
    history: {
      championships: 1,
      runnerUps: 1,
      playoffAppearances: 5,
      seasonWins: 76,
      seasonLosses: 84,
      bestFinish: "Champion (2020)"
    },
    color: "#27AE60"
  },
  {
    id: 4,
    name: "Rebound Legends",
    logo: "https://images.unsplash.com/photo-1505666287802-931582b5ee60?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    owner: "Jessica Lee",
    history: {
      championships: 0,
      runnerUps: 2,
      playoffAppearances: 6,
      seasonWins: 83,
      seasonLosses: 77,
      bestFinish: "Runner-up (2020, 2023)"
    },
    color: "#9B59B6"
  },
  {
    id: 5,
    name: "Fast Break Fury",
    logo: "https://images.unsplash.com/photo-1574279606130-09958dc756f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    owner: "David Chen",
    history: {
      championships: 1,
      runnerUps: 0,
      playoffAppearances: 4,
      seasonWins: 67,
      seasonLosses: 93,
      bestFinish: "Champion (2017)"
    },
    color: "#F1C40F"
  },
  {
    id: 6,
    name: "Court Commanders",
    logo: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    owner: "Ryan Garcia",
    history: {
      championships: 0,
      runnerUps: 1,
      playoffAppearances: 3,
      seasonWins: 58,
      seasonLosses: 102,
      bestFinish: "Runner-up (2018)"
    },
    color: "#E74C3C"
  },
  {
    id: 7,
    name: "Baseline Ballers",
    logo: "https://images.unsplash.com/photo-1528751014814-50d69063d966?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    owner: "Taylor Stevens",
    history: {
      championships: 1,
      runnerUps: 0,
      playoffAppearances: 5,
      seasonWins: 72,
      seasonLosses: 88,
      bestFinish: "Champion (2016)"
    },
    color: "#1ABC9C"
  },
  {
    id: 8,
    name: "Hoop Dreams",
    logo: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    owner: "Jordan Mitchell",
    history: {
      championships: 0,
      runnerUps: 0,
      playoffAppearances: 2,
      seasonWins: 54,
      seasonLosses: 106,
      bestFinish: "Conference Finals (2022)"
    },
    color: "#D35400"
  }
];

// Mock data for trades
export const trades: Trade[] = [
  {
    id: 1,
    date: "2023-12-10",
    teams: [
      {
        teamId: 1,
        received: ["Jayson Tatum", "2024 1st Round Pick"],
        gave: ["LeBron James", "2024 2nd Round Pick", "2025 1st Round Pick"]
      },
      {
        teamId: 3,
        received: ["LeBron James", "2024 2nd Round Pick", "2025 1st Round Pick"],
        gave: ["Jayson Tatum", "2024 1st Round Pick"]
      }
    ]
  },
  {
    id: 2,
    date: "2023-11-15",
    teams: [
      {
        teamId: 2,
        received: ["Damian Lillard"],
        gave: ["Ja Morant", "2024 3rd Round Pick"]
      },
      {
        teamId: 5,
        received: ["Ja Morant", "2024 3rd Round Pick"],
        gave: ["Damian Lillard"]
      }
    ]
  },
  {
    id: 3,
    date: "2023-10-28",
    teams: [
      {
        teamId: 4,
        received: ["Kevin Durant", "2025 2nd Round Pick"],
        gave: ["Anthony Edwards", "Domantas Sabonis"]
      },
      {
        teamId: 6,
        received: ["Anthony Edwards", "Domantas Sabonis"],
        gave: ["Kevin Durant", "2025 2nd Round Pick"]
      }
    ]
  },
  {
    id: 4,
    date: "2023-09-05",
    teams: [
      {
        teamId: 7,
        received: ["Devin Booker", "2024 2nd Round Pick", "2025 3rd Round Pick"],
        gave: ["Luka Doncic"]
      },
      {
        teamId: 8,
        received: ["Luka Doncic"],
        gave: ["Devin Booker", "2024 2nd Round Pick", "2025 3rd Round Pick"]
      }
    ]
  },
  {
    id: 5,
    date: "2023-08-17",
    teams: [
      {
        teamId: 1,
        received: ["Joel Embiid"],
        gave: ["Nikola Jokic", "2024 4th Round Pick"]
      },
      {
        teamId: 2,
        received: ["Nikola Jokic", "2024 4th Round Pick"],
        gave: ["Joel Embiid"]
      }
    ]
  }
];

// Mock data for current standings
export const standings: Standing[] = [
  {
    teamId: 1,
    wins: 15,
    losses: 5,
    winPercentage: 0.750,
    pointsFor: 1580,
    pointsAgainst: 1425,
    streak: "W3",
    last10: "8-2"
  },
  {
    teamId: 2,
    wins: 14,
    losses: 6,
    winPercentage: 0.700,
    pointsFor: 1615,
    pointsAgainst: 1510,
    streak: "W5",
    last10: "7-3"
  },
  {
    teamId: 3,
    wins: 12,
    losses: 8,
    winPercentage: 0.600,
    pointsFor: 1550,
    pointsAgainst: 1530,
    streak: "W2",
    last10: "6-4"
  },
  {
    teamId: 7,
    wins: 11,
    losses: 9,
    winPercentage: 0.550,
    pointsFor: 1505,
    pointsAgainst: 1490,
    streak: "L1",
    last10: "5-5"
  },
  {
    teamId: 4,
    wins: 10,
    losses: 10,
    winPercentage: 0.500,
    pointsFor: 1490,
    pointsAgainst: 1495,
    streak: "W1",
    last10: "5-5"
  },
  {
    teamId: 5,
    wins: 8,
    losses: 12,
    winPercentage: 0.400,
    pointsFor: 1475,
    pointsAgainst: 1525,
    streak: "L3",
    last10: "4-6"
  },
  {
    teamId: 6,
    wins: 7,
    losses: 13,
    winPercentage: 0.350,
    pointsFor: 1420,
    pointsAgainst: 1540,
    streak: "L2",
    last10: "3-7"
  },
  {
    teamId: 8,
    wins: 3,
    losses: 17,
    winPercentage: 0.150,
    pointsFor: 1385,
    pointsAgainst: 1505,
    streak: "L6",
    last10: "2-8"
  }
];

// Mock data for champions
export const champions: Champion[] = [
  {
    year: 2023,
    teamId: 1,
    runnerUpId: 4,
    mvp: "Joel Embiid",
    record: "14-6",
    pointsScored: 2450
  },
  {
    year: 2022,
    teamId: 2,
    runnerUpId: 1,
    mvp: "Nikola Jokic",
    record: "16-4",
    pointsScored: 2520
  },
  {
    year: 2021,
    teamId: 1,
    runnerUpId: 2,
    mvp: "Giannis Antetokounmpo",
    record: "15-5",
    pointsScored: 2480
  },
  {
    year: 2020,
    teamId: 3,
    runnerUpId: 4,
    mvp: "LeBron James",
    record: "13-7",
    pointsScored: 2350
  },
  {
    year: 2019,
    teamId: 1,
    runnerUpId: 5,
    mvp: "James Harden",
    record: "14-6",
    pointsScored: 2410
  },
  {
    year: 2018,
    teamId: 2,
    runnerUpId: 6,
    mvp: "Stephen Curry",
    record: "15-5",
    pointsScored: 2490
  },
  {
    year: 2017,
    teamId: 5,
    runnerUpId: 3,
    mvp: "Russell Westbrook",
    record: "12-8",
    pointsScored: 2320
  },
  {
    year: 2016,
    teamId: 7,
    runnerUpId: 2,
    mvp: "Kevin Durant",
    record: "13-7",
    pointsScored: 2380
  }
];

// Helper function to get team by ID
export const getTeamById = (id: number): Team | undefined => {
  return teams.find(team => team.id === id);
};

// Helper function to get standings sorted by wins
export const getSortedStandings = (): (Standing & { team: Team })[] => {
  return standings
    .map(standing => ({
      ...standing,
      team: getTeamById(standing.teamId)!
    }))
    .sort((a, b) => b.wins - a.wins || a.losses - b.losses);
};

// Helper function to get sorted champions by year
export const getSortedChampions = (): (Champion & { team: Team, runnerUp: Team })[] => {
  return champions
    .map(champion => ({
      ...champion,
      team: getTeamById(champion.teamId)!,
      runnerUp: getTeamById(champion.runnerUpId)!
    }))
    .sort((a, b) => b.year - a.year);
};

// Helper function to get sorted trades by date
export const getSortedTrades = (): (Trade & { teamDetails: { team: Team, received: string[], gave: string[] }[] })[] => {
  return trades
    .map(trade => ({
      ...trade,
      teamDetails: trade.teams.map(team => ({
        team: getTeamById(team.teamId)!,
        received: team.received,
        gave: team.gave
      }))
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};