import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Eye, Menu, X, Phone, Sun, Moon } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => localStorage.getItem('darkMode') === 'true');
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
  };

  const isActive = (path: string) =>
    location.pathname === path 
      ? "text-orange-500 font-bold" 
      : "text-gray-700 hover:text-orange-500 dark:text-gray-200 dark:hover:text-orange-400";

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-950 shadow-lg border-b border-gray-100 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-md">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent">
                PETER OPTIQUE
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">Opticien Moderne</p>
            </div>
          </Link>

          {/* Desktop Nav */}
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

            <Link
              to="/ordonnance"
              className="ml-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 rounded-2xl font-bold hover:shadow-lg transition flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Déposer Ordonnance
            </Link>

            <button
              onClick={toggleDarkMode}
              className="ml-2 p-3 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {isDark ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6" />}
            </button>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU - Version corrigée */}
      {mobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-70 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 overflow-y-auto">
            <div className="p-6 border-b dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400">Menu</h2>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                <X className="w-8 h-8 text-gray-700 dark:text-gray-300" />
              </button>
            </div>

            <nav className="p-6 flex flex-col gap-6 text-lg">
              {[
                { label: "Accueil", path: "/" },
                { label: "Lunettes de Soleil", path: "/soleil" },
                { label: "Photogrey", path: "/photogrey" },
                { label: "Enfant", path: "/enfant" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="py-4 px-5 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-2xl transition font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                to="/ordonnance"
                className="mt-8 bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-5 text-center rounded-2xl font-bold text-xl hover:brightness-110 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Déposer mon Ordonnance
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}