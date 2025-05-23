import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Award, Calendar } from 'lucide-react';
import { Team } from '../data';

interface TeamCardProps {
  team: Team;
}

const TeamCard = ({ team }: TeamCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Safely access history properties with defaults
  const history = team?.history || {
    championships: 0,
    runnerUps: 0,
    playoffAppearances: 0,
    seasonWins: 0,
    seasonLosses: 0,
    bestFinish: 'N/A'
  };

  return (
    <div 
      className="relative w-full h-80 perspective-1000 cursor-pointer"
      onClick={handleFlip}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-500 preserve-3d"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front of card */}
        <div 
          className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg"
          style={{ 
            backgroundColor: team?.color || '#333',
            backgroundImage: `linear-gradient(135deg, ${team?.color || '#333'}cc, ${team?.color || '#333'}88)`,
          }}
        >
          <div className="flex flex-col items-center justify-center h-full p-6 text-center text-white">
            <div className="w-32 h-32 mb-4 rounded-full overflow-hidden bg-white/20 p-1">
              <img 
                src={team?.logo || 'https://via.placeholder.com/150'} 
                alt={`${team?.name || 'Team'} logo`} 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2">{team?.name || 'Team Name'}</h2>
            <p className="text-white/80 mb-4">Owned by {team?.owner || 'Owner'}</p>
            <p className="text-sm text-white/70">Click to see team history</p>
          </div>
        </div>

        {/* Back of card */}
        <div 
          className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg bg-[#1A1F38] rotateY-180 text-white"
        >
          <div className="flex flex-col h-full p-6">
            <h3 className="text-xl font-bold mb-4 text-center">{team?.name || 'Team'} History</h3>
            
            <div className="flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Trophy size={18} className="text-yellow-400" />
                  <span className="text-sm">Championships: {history.championships}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Award size={18} className="text-silver-400" />
                  <span className="text-sm">Runner-ups: {history.runnerUps}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-blue-400" />
                  <span className="text-sm">Playoff Appearances: {history.playoffAppearances}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-green-400" />
                  <span className="text-sm">Record: {history.seasonWins}-{history.seasonLosses}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-3 border-t border-white/10">
                <p className="text-sm font-medium">Best Finish: {history.bestFinish}</p>
                <p className="text-sm text-white/70 mt-2">Click to flip back</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TeamCard;