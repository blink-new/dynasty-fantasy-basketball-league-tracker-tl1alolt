import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Standings from './pages/Standings';
import Trades from './pages/Trades';
import Champions from './pages/Champions';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/standings" element={<Standings />} />
            <Route path="/trades" element={<Trades />} />
            <Route path="/champions" element={<Champions />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;