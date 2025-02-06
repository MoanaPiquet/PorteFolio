import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useRef } from "react";
import Home from './pages/Home';
import Shell from './pages/42sh';
import Corewar from './pages/Corewar';
import CPMS from './pages/Cpms'

export default function App() {
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setSubmenuVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setSubmenuVisible(false), 200);
  };

  return (
    <div className="min-h-screen text-white">
      <Router>
        <nav className="p-4 flex justify-center gap-8 bg-gray-200 dark:bg-gray-800 relative">
          <Link to="/" className="hover:underline">Accueil</Link>
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="hover:underline cursor-pointer">Projets</span>
            {submenuVisible && (
              <div className="absolute top-8 left-0 bg-gray-100 dark:bg-gray-700 shadow-lg rounded">
                <Link to="/projects/corewar" className="block px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600">
                  Corewar
                </Link>
                <Link to="/projects/42sh" className="block px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600">
                  42sh
                </Link>
                 <Link to="/projects/cpms" className="block px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600">
                  CPMS
                </Link>
              </div>
            )}
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/corewar" element={<Corewar />} />
          <Route path="/projects/42sh" element={<Shell />} />
          <Route path="/projects/cpms" element={<CPMS />} />
        </Routes>
      </Router>
    </div>
  );
}
