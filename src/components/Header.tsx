import { Link, useLocation } from 'react-router-dom';
import { Trophy, Table, BarChart3, RefreshCcw } from 'lucide-react';
import { cn } from '../lib/utils';

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Teams', path: '/', icon: <BarChart3 className="h-5 w-5" /> },
    { name: 'Standings', path: '/standings', icon: <Table className="h-5 w-5" /> },
    { name: 'Trades', path: '/trades', icon: <RefreshCcw className="h-5 w-5" /> },
    { name: 'Champions', path: '/champions', icon: <Trophy className="h-5 w-5" /> },
  ];

  return (
    <header className="bg-[#0f1424] border-b border-[#2a2f45] sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-full h-8 w-8 flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  <path d="M12 12a15.3 15.3 0 0 1 10 4 15.3 15.3 0 0 1-10 4 15.3 15.3 0 0 1-10-4 15.3 15.3 0 0 1 10-4z" />
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">Dynasty Hoops</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-200",
                  location.pathname === item.path
                    ? "bg-[#2a2f45] text-white"
                    : "text-gray-300 hover:bg-[#1c2033] hover:text-white"
                )}
              >
                <span className="mr-1">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="md:hidden flex items-center">
            {/* Mobile menu button */}
            <button className="text-gray-300 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium flex items-center",
                location.pathname === item.path
                  ? "bg-[#2a2f45] text-white"
                  : "text-gray-300 hover:bg-[#1c2033] hover:text-white"
              )}
            >
              <span className="mr-2">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;