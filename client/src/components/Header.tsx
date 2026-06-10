import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Eye, Menu, X, Phone, Sun, Moon, Palette } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(() => {
    return localStorage.getItem('darkMode') === 'true';
  });
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDark.toString());
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  const isActive = (path: string) =>
    location.pathname === path 
      ? "text-orange-500 font-bold" 
      : "text-gray-700 hover:text-orange-500 dark:text-gray-200 dark:hover:text-orange-400";

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-950 shadow-lg border-b border-gray-100 dark:border-gray-800 transition-colors">
      <div className="max-w-8xl mx-auto px-2 sm:px-2 lg:px-3">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-md">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-1xl font-black tracking-tight bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent">
                PETER OPTIQUE
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">Opticien Moderne</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
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

            <Link to="/ordonnance" className="ml-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 rounded-2xl font-bold hover:shadow-lg transition flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Déposer Ordonnance
            </Link>

            {/* Nouvel onglet */}
            <Link to="/lentilles" className="ml-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white px-6 py-3 rounded-2xl font-bold hover:shadow-lg transition">
              Changer de Lentilles
            </Link>

            <button onClick={toggleDarkMode} className="ml-2 p-3 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              {isDark ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6" />}
            </button>
          </nav>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-70 z-40 md:hidden" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-900 shadow-2xl z-50 overflow-y-auto transition-colors">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold dark:text-white">Menu</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                  <X className="w-8 h-8 dark:text-white" />
                </button>
              </div>
              
              <nav className="flex flex-col gap-4">
                {[
                  { label: "Accueil", path: "/" },
                  { label: "Lunettes de Soleil", path: "/soleil" },
                  { label: "Photogrey", path: "/photogrey" },
                  { label: "Enfant", path: "/enfant" },
                ].map((item) => (
                  <Link 
                    key={item.path} 
                    to={item.path} 
                    className={`text-lg py-2 ${isActive(item.path)}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="h-px bg-gray-100 dark:bg-gray-800 my-4" />

                <Link 
                  to="/ordonnance" 
                  className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-4 rounded-2xl font-bold text-center flex items-center justify-center gap-2 shadow-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Phone className="w-5 h-5" />
                  Déposer Ordonnance
                </Link>

                <Link 
                  to="/lentilles" 
                  className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-6 py-4 rounded-2xl font-bold text-center flex items-center justify-center gap-2 shadow-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Palette className="w-5 h-5" />
                  Changer de Lentilles
                </Link>

                <button 
                  onClick={toggleDarkMode} 
                  className="mt-6 flex items-center justify-between w-full p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl transition"
                >
                  <span className="font-bold dark:text-white">
                    Mode {isDark ? 'Clair' : 'Sombre'}
                  </span>
                  {isDark ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-600" />}
                </button>
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
}