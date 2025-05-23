export interface Player {
  id: number;
  name: string;
  position: string;
  rating: number;
  photoUrl?: string;
}

export interface TradeAsset {
  type: 'player' | 'pick';
  player?: Player;
  pickYear?: number;
  pickRound?: number;
  details?: string;
}

export interface Trade {
  id: number;
  date: string;
  teamAId: number;
  teamBId: number;
  teamAAssets: TradeAsset[];
  teamBAssets: TradeAsset[];
}

// Sample players for trades
const players: Player[] = [
  { id: 101, name: "James Anderson", position: "PG", rating: 92, photoUrl: "https://images.unsplash.com/photo-1627843563095-f414716dde4e?q=80&w=300&auto=format&fit=crop" },
  { id: 102, name: "Kevin Mitchell", position: "SG", rating: 89, photoUrl: "https://images.unsplash.com/photo-1507680225127-6caee9c62b14?q=80&w=300&auto=format&fit=crop" },
  { id: 103, name: "Anthony Davis", position: "PF", rating: 94, photoUrl: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=300&auto=format&fit=crop" },
  { id: 104, name: "Marcus Johnson", position: "C", rating: 87, photoUrl: "https://images.unsplash.com/photo-1553988634-ce7e142baad5?q=80&w=300&auto=format&fit=crop" },
  { id: 105, name: "Chris Thompson", position: "SF", rating: 90, photoUrl: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=300&auto=format&fit=crop" },
  { id: 106, name: "Michael Williams", position: "PG", rating: 86, photoUrl: "https://images.unsplash.com/photo-1568078055796-eaf5b83de4b9?q=80&w=300&auto=format&fit=crop" },
  { id: 107, name: "David Brown", position: "C", rating: 91, photoUrl: "https://images.unsplash.com/photo-1500468756762-a401b6f17b46?q=80&w=300&auto=format&fit=crop" },
  { id: 108, name: "Stephen Harris", position: "SG", rating: 88, photoUrl: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=300&auto=format&fit=crop" },
  { id: 109, name: "Eric Miller", position: "PF", rating: 85, photoUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&auto=format&fit=crop" },
  { id: 110, name: "Jason Wilson", position: "SF", rating: 93, photoUrl: "https://images.unsplash.com/photo-1611367540766-8646f8e95fe5?q=80&w=300&auto=format&fit=crop" }
];

export const trades: Trade[] = [
  {
    id: 1,
    date: "2023-02-15",
    teamAId: 1,
    teamBId: 3,
    teamAAssets: [
      { type: 'player', player: players[0] },
      { type: 'pick', pickYear: 2024, pickRound: 1 }
    ],
    teamBAssets: [
      { type: 'player', player: players[2] },
      { type: 'player', player: players[5] }
    ]
  },
  {
    id: 2,
    date: "2023-01-10",
    teamAId: 2,
    teamBId: 5,
    teamAAssets: [
      { type: 'player', player: players[1] },
      { type: 'player', player: players[8] }
    ],
    teamBAssets: [
      { type: 'player', player: players[4] },
      { type: 'pick', pickYear: 2024, pickRound: 2 },
      { type: 'pick', pickYear: 2025, pickRound: 1 }
    ]
  },
  {
    id: 3,
    date: "2022-12-08",
    teamAId: 4,
    teamBId: 7,
    teamAAssets: [
      { type: 'player', player: players[3] },
      { type: 'pick', pickYear: 2024, pickRound: 3 }
    ],
    teamBAssets: [
      { type: 'player', player: players[6] }
    ]
  },
  {
    id: 4,
    date: "2022-11-25",
    teamAId: 1,
    teamBId: 8,
    teamAAssets: [
      { type: 'player', player: players[9] }
    ],
    teamBAssets: [
      { type: 'player', player: players[7] },
      { type: 'pick', pickYear: 2024, pickRound: 1 },
      { type: 'pick', pickYear: 2025, pickRound: 2 }
    ]
  },
  {
    id: 5,
    date: "2022-10-31",
    teamAId: 6,
    teamBId: 3,
    teamAAssets: [
      { type: 'player', player: players[2] },
      { type: 'pick', pickYear: 2025, pickRound: 1 }
    ],
    teamBAssets: [
      { type: 'player', player: players[0] },
      { type: 'player', player: players[8] }
    ]
  },
  {
    id: 6,
    date: "2022-08-17",
    teamAId: 5,
    teamBId: 2,
    teamAAssets: [
      { type: 'player', player: players[4] },
      { type: 'player', player: players[6] }
    ],
    teamBAssets: [
      { type: 'player', player: players[1] },
      { type: 'pick', pickYear: 2024, pickRound: 1 },
      { type: 'pick', pickYear: 2024, pickRound: 2 }
    ]
  }
];