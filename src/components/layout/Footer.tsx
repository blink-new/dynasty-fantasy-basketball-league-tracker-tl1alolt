import { Basketball, Trophy, History, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-nba-black text-white py-8 mt-auto">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center mb-4">
              <Basketball className="h-6 w-6 text-nba-orange mr-2" />
              <h3 className="font-heading text-lg font-bold">DYNASTY LEAGUE</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Tracking the history and stats of our long-standing dynasty fantasy basketball league.
              Founded in 2013, celebrating 10+ years of friendly competition and basketball passion.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-nba-orange flex items-center">
                  <Basketball className="h-4 w-4 mr-2" />
                  <span>Teams</span>
                </Link>
              </li>
              <li>
                <Link to="/trades" className="text-gray-400 hover:text-nba-orange flex items-center">
                  <History className="h-4 w-4 mr-2" />
                  <span>Trade History</span>
                </Link>
              </li>
              <li>
                <Link to="/standings" className="text-gray-400 hover:text-nba-orange flex items-center">
                  <Github className="h-4 w-4 mr-2" />
                  <span>Standings</span>
                </Link>
              </li>
              <li>
                <Link to="/champions" className="text-gray-400 hover:text-nba-orange flex items-center">
                  <Trophy className="h-4 w-4 mr-2" />
                  <span>Hall of Champions</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Contact Commissioner</h3>
            <p className="text-gray-400 mb-2">Have questions about the league?</p>
            <a 
              href="mailto:commissioner@dynastyleague.com" 
              className="text-nba-orange hover:text-nba-orange/80 transition-colors"
            >
              commissioner@dynastyleague.com
            </a>
            <div className="mt-4">
              <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Dynasty League. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;