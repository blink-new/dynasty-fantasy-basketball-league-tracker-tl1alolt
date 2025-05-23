import { Team, Trade, Standings, Champion } from './types';

export const teams: Team[] = [
  {
    id: 'team1',
    name: 'Dynasty Dominators',
    owner: 'John Smith',
    logo: 'https://images.unsplash.com/photo-1546519638-68e109acd27d?w=300&h=300&fit=crop&q=80',
    colors: {
      primary: '#C8102E',
      secondary: '#1D428A',
    },
    history: [
      { year: 2023, standing: 1, wins: 18, losses: 3, champion: true },
      { year: 2022, standing: 3, wins: 15, losses: 6, champion: false },
      { year: 2021, standing: 5, wins: 11, losses: 10, champion: false },
    ],
  },
  {
    id: 'team2',
    name: 'Slam Dunkers',
    owner: 'Sarah Johnson',
    logo: 'https://images.unsplash.com/photo-1567117866510-6b992fcdf0ea?w=300&h=300&fit=crop&q=80',
    colors: {
      primary: '#007A33',
      secondary: '#BA9653',
    },
    history: [
      { year: 2023, standing: 4, wins: 12, losses: 9, champion: false },
      { year: 2022, standing: 1, wins: 19, losses: 2, champion: true },
      { year: 2021, standing: 2, wins: 16, losses: 5, champion: false },
    ],
  },
  {
    id: 'team3',
    name: 'Triple Threats',
    owner: 'Mike Davis',
    logo: 'https://images.unsplash.com/photo-1505666287802-931dc83a5dc7?w=300&h=300&fit=crop&q=80',
    colors: {
      primary: '#552583',
      secondary: '#FDB927',
    },
    history: [
      { year: 2023, standing: 2, wins: 16, losses: 5, champion: false },
      { year: 2022, standing: 6, wins: 10, losses: 11, champion: false },
      { year: 2021, standing: 1, wins: 19, losses: 2, champion: true },
    ],
  },
  {
    id: 'team4',
    name: 'Rebound Kings',
    owner: 'Jessica Taylor',
    logo: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?w=300&h=300&fit=crop&q=80',
    colors: {
      primary: '#1D1160',
      secondary: '#E56020',
    },
    history: [
      { year: 2023, standing: 6, wins: 9, losses: 12, champion: false },
      { year: 2022, standing: 4, wins: 14, losses: 7, champion: false },
      { year: 2021, standing: 3, wins: 15, losses: 6, champion: false },
    ],
  },
  {
    id: 'team5',
    name: 'Court Crushers',
    owner: 'David Wilson',
    logo: 'https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=300&h=300&fit=crop&q=80',
    colors: {
      primary: '#5A2D81',
      secondary: '#63727A',
    },
    history: [
      { year: 2023, standing: 3, wins: 15, losses: 6, champion: false },
      { year: 2022, standing: 2, wins: 17, losses: 4, champion: false },
      { year: 2021, standing: 4, wins: 13, losses: 8, champion: false },
    ],
  },
  {
    id: 'team6',
    name: 'Fast Breaks',
    owner: 'Amanda Brown',
    logo: 'https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?w=300&h=300&fit=crop&q=80',
    colors: {
      primary: '#CE1141',
      secondary: '#000000',
    },
    history: [
      { year: 2023, standing: 5, wins: 11, losses: 10, champion: false },
      { year: 2022, standing: 5, wins: 12, losses: 9, champion: false },
      { year: 2021, standing: 6, wins: 9, losses: 12, champion: false },
    ],
  },
  {
    id: 'team7',
    name: 'Three-Point Legends',
    owner: 'Chris Rodriguez',
    logo: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=300&h=300&fit=crop&q=80',
    colors: {
      primary: '#006BB6',
      secondary: '#F58426',
    },
    history: [
      { year: 2023, standing: 7, wins: 8, losses: 13, champion: false },
      { year: 2022, standing: 8, wins: 7, losses: 14, champion: false },
      { year: 2021, standing: 7, wins: 8, losses: 13, champion: false },
    ],
  },
  {
    id: 'team8',
    name: 'Hoops Dynasty',
    owner: 'Emily Martinez',
    logo: 'https://images.unsplash.com/photo-1574880638517-37e43fb2b91e?w=300&h=300&fit=crop&q=80',
    colors: {
      primary: '#0E2240',
      secondary: '#FEC524',
    },
    history: [
      { year: 2023, standing: 8, wins: 6, losses: 15, champion: false },
      { year: 2022, standing: 7, wins: 8, losses: 13, champion: false },
      { year: 2021, standing: 8, wins: 7, losses: 14, champion: false },
    ],
  },
];

export const trades: Trade[] = [
  {
    id: 'trade1',
    date: '2023-12-15',
    teams: [
      {
        teamId: 'team1',
        received: {
          players: ['LeBron James', 'Anthony Davis'],
          picks: [],
        },
        sent: {
          players: ['Kevin Durant', 'Kyrie Irving'],
          picks: ['2024 1st Round'],
        },
      },
      {
        teamId: 'team2',
        received: {
          players: ['Kevin Durant', 'Kyrie Irving'],
          picks: ['2024 1st Round'],
        },
        sent: {
          players: ['LeBron James', 'Anthony Davis'],
          picks: [],
        },
      },
    ],
    notes: 'Blockbuster trade that reshaped both franchises',
  },
  {
    id: 'trade2',
    date: '2023-11-05',
    teams: [
      {
        teamId: 'team3',
        received: {
          players: ['Stephen Curry'],
          picks: [],
        },
        sent: {
          players: ['Ja Morant', 'Jaren Jackson Jr.'],
          picks: [],
        },
      },
      {
        teamId: 'team4',
        received: {
          players: ['Ja Morant', 'Jaren Jackson Jr.'],
          picks: [],
        },
        sent: {
          players: ['Stephen Curry'],
          picks: [],
        },
      },
    ],
    notes: 'Youth vs. Experience swap',
  },
  {
    id: 'trade3',
    date: '2023-10-22',
    teams: [
      {
        teamId: 'team5',
        received: {
          players: ['Joel Embiid'],
          picks: ['2025 2nd Round'],
        },
        sent: {
          players: ['Nikola Jokic'],
          picks: [],
        },
      },
      {
        teamId: 'team6',
        received: {
          players: ['Nikola Jokic'],
          picks: [],
        },
        sent: {
          players: ['Joel Embiid'],
          picks: ['2025 2nd Round'],
        },
      },
    ],
    notes: 'Battle of the big men',
  },
  {
    id: 'trade4',
    date: '2023-09-30',
    teams: [
      {
        teamId: 'team7',
        received: {
          players: ['Luka Doncic'],
          picks: ['2024 2nd Round', '2025 2nd Round'],
        },
        sent: {
          players: ['Jayson Tatum'],
          picks: ['2024 1st Round'],
        },
      },
      {
        teamId: 'team8',
        received: {
          players: ['Jayson Tatum'],
          picks: ['2024 1st Round'],
        },
        sent: {
          players: ['Luka Doncic'],
          picks: ['2024 2nd Round', '2025 2nd Round'],
        },
      },
    ],
    notes: 'Young stars exchange',
  },
  {
    id: 'trade5',
    date: '2022-12-10',
    teams: [
      {
        teamId: 'team1',
        received: {
          players: ['Giannis Antetokounmpo'],
          picks: [],
        },
        sent: {
          players: ['Devin Booker', 'Deandre Ayton'],
          picks: ['2023 1st Round'],
        },
      },
      {
        teamId: 'team3',
        received: {
          players: ['Devin Booker', 'Deandre Ayton'],
          picks: ['2023 1st Round'],
        },
        sent: {
          players: ['Giannis Antetokounmpo'],
          picks: [],
        },
      },
    ],
    notes: 'MVP-level talent exchange',
  },
];

export const currentStandings: Standings = {
  year: 2023,
  teams: [
    { teamId: 'team1', wins: 18, losses: 3, pointsFor: 2450, pointsAgainst: 2100 },
    { teamId: 'team3', wins: 16, losses: 5, pointsFor: 2380, pointsAgainst: 2150 },
    { teamId: 'team5', wins: 15, losses: 6, pointsFor: 2340, pointsAgainst: 2200 },
    { teamId: 'team2', wins: 12, losses: 9, pointsFor: 2280, pointsAgainst: 2260 },
    { teamId: 'team6', wins: 11, losses: 10, pointsFor: 2220, pointsAgainst: 2240 },
    { teamId: 'team4', wins: 9, losses: 12, pointsFor: 2180, pointsAgainst: 2300 },
    { teamId: 'team7', wins: 8, losses: 13, pointsFor: 2120, pointsAgainst: 2280 },
    { teamId: 'team8', wins: 6, losses: 15, pointsFor: 2050, pointsAgainst: 2390 },
  ],
};

export const champions: Champion[] = [
  {
    year: 2023,
    teamId: 'team1',
    runnerUpId: 'team3',
    score: '125-118',
  },
  {
    year: 2022,
    teamId: 'team2',
    runnerUpId: 'team5',
    score: '132-126',
  },
  {
    year: 2021,
    teamId: 'team3',
    runnerUpId: 'team2',
    score: '121-115',
  },
  {
    year: 2020,
    teamId: 'team5',
    runnerUpId: 'team1',
    score: '128-122',
  },
  {
    year: 2019,
    teamId: 'team4',
    runnerUpId: 'team6',
    score: '119-110',
  },
];

// Helper function to get team by ID
export const getTeamById = (teamId: string): Team | undefined => {
  return teams.find(team => team.id === teamId);
};

// Helper function to get team name by ID
export const getTeamNameById = (teamId: string): string => {
  const team = getTeamById(teamId);
  return team ? team.name : 'Unknown Team';
};