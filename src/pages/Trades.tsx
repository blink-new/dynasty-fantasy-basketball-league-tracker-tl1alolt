import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight, CalendarDays, ChevronDown, Search } from 'lucide-react';
import { getSortedTrades } from '../data';

const Trades = () => {
  const sortedTrades = getSortedTrades();
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedTradeId, setExpandedTradeId] = useState<number | null>(null);

  const toggleExpand = (tradeId: number) => {
    setExpandedTradeId(expandedTradeId === tradeId ? null : tradeId);
  };

  const filteredTrades = sortedTrades.filter(trade => {
    const searchLower = searchTerm.toLowerCase();
    
    // Check if any team names match
    const teamNamesMatch = trade.teamDetails.some(detail => 
      detail.team.name.toLowerCase().includes(searchLower)
    );
    
    // Check if any player names match
    const playerNamesMatch = trade.teamDetails.some(detail => 
      [...detail.received, ...detail.gave].some(item => 
        item.toLowerCase().includes(searchLower)
      )
    );
    
    // Check if date matches
    const dateMatch = trade.date.includes(searchTerm);
    
    return teamNamesMatch || playerNamesMatch || dateMatch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
          <ArrowLeftRight className="text-orange-500" />
          <span>Trade History</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Track all the major moves and deals throughout our dynasty league's history.
        </p>
      </motion.div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search trades by team, player, or date..."
          className="w-full pl-10 pr-4 py-3 bg-[#161b33] border border-[#2a2f45] rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/50 text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredTrades.length === 0 ? (
        <div className="text-center py-12 bg-[#161b33] rounded-xl border border-[#2a2f45]">
          <p className="text-gray-400 text-lg">No trades found matching your search criteria.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredTrades.map((trade, index) => (
            <motion.div
              key={trade.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#161b33] rounded-xl border border-[#2a2f45] overflow-hidden"
            >
              <div 
                className="flex flex-col md:flex-row justify-between items-start md:items-center p-5 cursor-pointer"
                onClick={() => toggleExpand(trade.id)}
              >
                <div className="flex items-center gap-4 mb-3 md:mb-0">
                  <div className="p-3 bg-[#1d2340] rounded-full">
                    <ArrowLeftRight className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-xl font-semibold">
                      {trade.teamDetails.map(td => td.team.name).join(' ⟷ ')}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm mt-1">
                      <CalendarDays className="h-4 w-4 mr-1" />
                      {formatDate(trade.date)}
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <ChevronDown 
                    className={`h-5 w-5 transition-transform duration-300 ${expandedTradeId === trade.id ? 'rotate-180' : ''}`} 
                  />
                </div>
              </div>
              
              {expandedTradeId === trade.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 pb-5 border-t border-[#2a2f45]"
                >
                  <div className="pt-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {trade.teamDetails.map((teamDetail) => (
                      <div 
                        key={teamDetail.team.id} 
                        className="p-4 rounded-lg"
                        style={{
                          backgroundColor: `${teamDetail.team.color}15`,
                          borderLeft: `4px solid ${teamDetail.team.color}`
                        }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full overflow-hidden">
                            <img 
                              src={teamDetail.team.logo} 
                              alt={teamDetail.team.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold">{teamDetail.team.name}</h3>
                            <p className="text-sm text-gray-400">Owned by {teamDetail.team.owner}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-medium text-green-400 mb-2">Received</h4>
                            <ul className="space-y-1">
                              {teamDetail.received.map((item, idx) => (
                                <li key={idx} className="text-sm bg-[#1d2340] py-2 px-3 rounded">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-red-400 mb-2">Gave Away</h4>
                            <ul className="space-y-1">
                              {teamDetail.gave.map((item, idx) => (
                                <li key={idx} className="text-sm bg-[#1d2340] py-2 px-3 rounded">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Trades;