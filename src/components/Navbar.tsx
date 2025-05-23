import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shirt } from 'lucide-react';
import { Button } from './ui/button';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-gradient-to-r from-blue-800 to-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Shirt size={32} className="text-amber-400" />
            <Link to="/" className="text-xl md:text-2xl font-bold tracking-tight">
              Dynasty League
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-4">
            <Link to="/">
              <Button 
                variant={isActive('/') ? "secondary" : "ghost"} 
                className={isActive('/') ? "bg-white text-blue-800" : "text-white hover:bg-blue-700"}
              >
                Teams
              </Button>
            </Link>
            <Link to="/trades">
              <Button 
                variant={isActive('/trades') ? "secondary" : "ghost"} 
                className={isActive('/trades') ? "bg-white text-blue-800" : "text-white hover:bg-blue-700"}
              >
                Trades
              </Button>
            </Link>
            <Link to="/standings">
              <Button 
                variant={isActive('/standings') ? "secondary" : "ghost"} 
                className={isActive('/standings') ? "bg-white text-blue-800" : "text-white hover:bg-blue-700"}
              >
                Standings
              </Button>
            </Link>
            <Link to="/champions">
              <Button 
                variant={isActive('/champions') ? "secondary" : "ghost"} 
                className={isActive('/champions') ? "bg-white text-blue-800" : "text-white hover:bg-blue-700"}
              >
                Champions
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" className="text-white">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className="md:hidden">
        <div className="flex flex-col px-4 pb-3 space-y-2">
          <Link 
            to="/" 
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              isActive('/') ? 'bg-white text-blue-800' : 'text-white hover:bg-blue-700'
            }`}
          >
            Teams
          </Link>
          <Link 
            to="/trades" 
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              isActive('/trades') ? 'bg-white text-blue-800' : 'text-white hover:bg-blue-700'
            }`}
          >
            Trades
          </Link>
          <Link 
            to="/standings" 
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              isActive('/standings') ? 'bg-white text-blue-800' : 'text-white hover:bg-blue-700'
            }`}
          >
            Standings
          </Link>
          <Link 
            to="/champions" 
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              isActive('/champions') ? 'bg-white text-blue-800' : 'text-white hover:bg-blue-700'
            }`}
          >
            Champions
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;