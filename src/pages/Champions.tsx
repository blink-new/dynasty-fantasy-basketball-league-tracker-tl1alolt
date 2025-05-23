import { motion } from 'framer-motion';
import { champions } from '../data/champions';
import { teams } from '../data/teams';

const Champions = () => {
  const getTeamLogo = (teamName: string) => {
    const team = teams.find(t => t.name === teamName);
    return team ? team.logoUrl : '';
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">Hall of Champions</h1>
          <p className="text-xl text-gray-300">The greatest teams in our league's history</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {champions.map((champion) => (
            <motion.div 
              key={champion.year}
              variants={itemVariants}
              className="bg-gradient-to-br from-[#1c2033] to-[#0f1424] rounded-xl overflow-hidden shadow-lg border border-[#2a2f45] flex flex-col sm:flex-row"
              whileHover={{ scale: 1.02, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)' }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-full sm:w-2/5 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#18192e] to-[#0d0f20]">
                <div className="w-24 h-24 mb-4 rounded-full bg-gradient-to-br from-[#f97316] to-[#ef4444] p-1">
                  <div className="w-full h-full rounded-full bg-[#1c2033] p-1 overflow-hidden">
                    <img
                      src={getTeamLogo(champion.team)}
                      alt={champion.team}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-1">{champion.team}</h2>
                <p className="text-amber-400 font-semibold text-lg mb-1">{champion.year} Champions</p>
                <p className="text-gray-300 text-sm">Owned by {champion.owner}</p>
              </div>
              
              <div className="w-full sm:w-3/5 p-6 flex flex-col justify-center">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-[#161a2c] p-4 rounded-lg">
                    <p className="text-gray-400 text-sm mb-1">Regular Season Record</p>
                    <p className="text-lg font-bold text-white">{champion.record}</p>
                  </div>
                  
                  <div className="bg-[#161a2c] p-4 rounded-lg">
                    <p className="text-gray-400 text-sm mb-1">Season MVP</p>
                    <p className="text-lg font-bold text-white">{champion.mvp}</p>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 mr-2">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                  </svg>
                  <span className="text-sm text-gray-300 italic">Championship Trophy</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">Dynasty History</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our league has seen fierce competition since its inception in 2014. Every champion has earned their place in our Hall of Champions through dedication, strategy, and a bit of fantasy basketball luck.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Champions;