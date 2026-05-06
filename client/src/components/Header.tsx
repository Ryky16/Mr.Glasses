import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Eye, Menu, X, Phone } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path ? "text-orange-500 font-bold border-b-2 border-orange-500" : "text-gray-700 hover:text-orange-500";

  const navItems = [
    { label: "Accueil", path: "/" },
    { label: "Lunettes de Soleil", path: "/soleil" },
    { label: "Photogrey", path: "/photogrey" },
    { label: "Enfant", path: "/enfant" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo + Nom */}
          <Link to="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-md">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                PETER OPTIQUE
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Opticien Moderne</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-lg font-medium">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className={isActive(item.path) + " pb-1 transition"}>
                {item.label}
              </Link>
            ))}

            {/* Bouton Déposer Ordonnance */}
            <Link
              to="/ordonnance"
              className="ml-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 rounded-2xl font-bold hover:shadow-lg hover:scale-105 transition flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone className="w-5 h-5" />
              Déposer Ordonnance
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-3 rounded-xl hover:bg-gray-100 transition"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-60 z-40 md:hidden" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden overflow-y-auto">
            <div className="p-6 border-b flex justify-between items-center">
              <h2 className="text-2xl font-bold text-teal-600">Menu</h2>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-8 h-8" />
              </button>
            </div>

            <nav className="p-6 space-y-6 text-lg">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block py-3 hover:text-orange-500 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                to="/ordonnance"
                className="block mt-8 bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-center py-5 rounded-2xl font-bold text-xl shadow-lg"
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