import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0c14] text-white">
      <Toaster position="top-right" />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;