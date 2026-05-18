import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Eye, Menu, X, Phone, Sun, Moon } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return saved === 'true' || (!saved && prefersDark);
  });
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem('darkMode', newMode.toString());

    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const isActive = (path: string) =>
    location.pathname === path 
      ? "text-orange-500 font-bold border-b-2 border-orange-500" 
      : "text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400";

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-950 shadow-lg border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent">
                PETER OPTIQUE
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">Opticien Moderne</p>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-lg font-medium">
            {[
              { label: "Accueil", path: "/" },
              { label: "Lunettes de Soleil", path: "/soleil" },
              { label: "Photogrey", path: "/photogrey" },
              { label: "Enfant", path: "/enfant" },
            ].map((item) => (
              <Link key={item.path} to={item.path} className={isActive(item.path)}>
                {item.label}
              </Link>
            ))}

            <Link to="/ordonnance" className="ml-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 rounded-2xl font-bold hover:shadow-lg transition">
              <Phone className="inline w-5 h-5 mr-2" />
              Déposer Ordonnance
            </Link>

            {/* Bouton Mode Sombre / Clair */}
            <button
              onClick={toggleDarkMode}
              className="ml-2 p-3 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {isDark ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6" />}
            </button>
          </nav>

          {/* Hamburger Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>
    </header>
  );
}