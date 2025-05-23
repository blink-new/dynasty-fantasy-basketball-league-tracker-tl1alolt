import { useState } from 'react';
import { motion } from 'framer-motion';
import TeamCard from '../components/TeamCard';
import { teams } from '../data/teams';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredTeams = teams.filter(team => 
    team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.owner.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0a0c14] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
            Dynasty Fantasy Basketball
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tracking the history and legacy of our dynasty league since 2014
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="mb-10 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search teams or owners..."
              className="w-full bg-[#1c2033] border border-[#2a2f45] rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <span className="absolute right-3 top-3.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
          </div>
        </div>

        {/* Teams Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {filteredTeams.map((team) => (
            <motion.div 
              key={team.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ translateY: -5 }}
            >
              <TeamCard team={team} />
            </motion.div>
          ))}

          {filteredTeams.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-gray-400">No teams found matching "{searchTerm}"</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;