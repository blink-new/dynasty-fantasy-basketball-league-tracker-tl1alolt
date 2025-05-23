const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0f1424] border-t border-[#2a2f45] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-full h-8 w-8 flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M12 12a15.3 15.3 0 0 1 10 4 15.3 15.3 0 0 1-10 4 15.3 15.3 0 0 1-10-4 15.3 15.3 0 0 1 10-4z" />
              </svg>
            </div>
            <span className="text-lg font-semibold bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">Dynasty Hoops</span>
          </div>
          
          <div className="text-sm text-gray-400">
            © {currentYear} Dynasty Hoops League. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;