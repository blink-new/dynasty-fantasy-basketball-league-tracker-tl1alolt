import { useState } from 'react';
import { motion } from 'framer-motion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { standings } from '../data/standings';
import { teams } from '../data/teams';

const Standings = () => {
  const [sortConfig, setSortConfig] = useState({
    key: 'winPercentage',
    direction: 'desc' as 'asc' | 'desc'
  });

  const sortedStandings = [...standings].sort((a, b) => {
    if (a[sortConfig.key as keyof typeof a] < b[sortConfig.key as keyof typeof b]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key as keyof typeof a] > b[sortConfig.key as keyof typeof b]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key: string) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  // Get team logo from teams data
  const getTeamLogo = (teamId: string) => {
    const team = teams.find(t => t.id === teamId);
    return team ? team.logoUrl : '';
  };

  // Animate standings when they change
  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0c14] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">Current Standings</h1>
          <p className="text-xl text-gray-300">Season 2023-2024</p>
        </motion.div>
        
        <motion.div 
          className="overflow-hidden rounded-xl border border-[#2a2f45] bg-[#1c2033] shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#161a2c] hover:bg-[#1f2335]">
                  <TableHead className="text-gray-300 w-16">Rank</TableHead>
                  <TableHead className="text-gray-300">Team</TableHead>
                  <TableHead 
                    className={`text-gray-300 cursor-pointer ${sortConfig.key === 'wins' ? 'text-white' : ''}`}
                    onClick={() => requestSort('wins')}
                  >
                    Wins {getSortIcon('wins')}
                  </TableHead>
                  <TableHead 
                    className={`text-gray-300 cursor-pointer ${sortConfig.key === 'losses' ? 'text-white' : ''}`}
                    onClick={() => requestSort('losses')}
                  >
                    Losses {getSortIcon('losses')}
                  </TableHead>
                  <TableHead 
                    className={`text-gray-300 cursor-pointer ${sortConfig.key === 'winPercentage' ? 'text-white' : ''}`}
                    onClick={() => requestSort('winPercentage')}
                  >
                    Win % {getSortIcon('winPercentage')}
                  </TableHead>
                  <TableHead 
                    className={`text-gray-300 cursor-pointer ${sortConfig.key === 'pointsFor' ? 'text-white' : ''} hidden md:table-cell`}
                    onClick={() => requestSort('pointsFor')}
                  >
                    PF {getSortIcon('pointsFor')}
                  </TableHead>
                  <TableHead 
                    className={`text-gray-300 cursor-pointer ${sortConfig.key === 'pointsAgainst' ? 'text-white' : ''} hidden md:table-cell`}
                    onClick={() => requestSort('pointsAgainst')}
                  >
                    PA {getSortIcon('pointsAgainst')}
                  </TableHead>
                  <TableHead 
                    className={`text-gray-300 cursor-pointer ${sortConfig.key === 'streak' ? 'text-white' : ''} hidden sm:table-cell`}
                    onClick={() => requestSort('streak')}
                  >
                    Streak {getSortIcon('streak')}
                  </TableHead>
                  <TableHead 
                    className={`text-gray-300 cursor-pointer ${sortConfig.key === 'lastTen' ? 'text-white' : ''} hidden sm:table-cell`}
                    onClick={() => requestSort('lastTen')}
                  >
                    Last 10 {getSortIcon('lastTen')}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <motion.div
                  variants={staggerVariants}
                  initial="hidden"
                  animate="visible"
                  className="contents"
                >
                  {sortedStandings.map((team, index) => (
                    <motion.tr
                      key={team.teamId}
                      variants={childVariants}
                      className="contents"
                    >
                      <TableRow 
                        className={`${
                          index < 8 ? 'hover:bg-[#242a44]' : 'hover:bg-[#242a44]'
                        } ${
                          index < 4 ? 'border-l-4 border-green-500' : 
                          index < 8 ? 'border-l-4 border-orange-400' : ''
                        }`}
                      >
                        <TableCell className="font-medium text-white">{index + 1}</TableCell>
                        <TableCell className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full overflow-hidden bg-[#2a2f45] flex-shrink-0">
                            <img
                              src={getTeamLogo(team.teamId)}
                              alt={team.teamName}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="font-semibold text-white">{team.teamName}</span>
                        </TableCell>
                        <TableCell className="text-white">{team.wins}</TableCell>
                        <TableCell className="text-white">{team.losses}</TableCell>
                        <TableCell className="text-white">{team.winPercentage.toFixed(3)}</TableCell>
                        <TableCell className="text-white hidden md:table-cell">{team.pointsFor}</TableCell>
                        <TableCell className="text-white hidden md:table-cell">{team.pointsAgainst}</TableCell>
                        <TableCell className={`hidden sm:table-cell ${team.streak.startsWith('W') ? 'text-green-400' : 'text-red-400'}`}>
                          {team.streak}
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">{team.lastTen}</TableCell>
                      </TableRow>
                    </motion.tr>
                  ))}
                </motion.div>
              </TableBody>
            </Table>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-8 bg-[#1c2033] rounded-lg border border-[#2a2f45] p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 mr-2"></div>
              <span className="text-sm text-gray-300">Division Winners</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-orange-400 mr-2"></div>
              <span className="text-sm text-gray-300">Playoff Spots</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Standings;