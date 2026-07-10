import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './components/Header';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import { OrdonnancePage } from './pages/OrdonnancePage';
import { LentillesPage } from './pages/LentillesPage';
import { AdminPage } from './pages/AdminPage';
import { lunettesData } from './data/lunettesData';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();
  const isAdminPage = location.pathname === '/admin';

  return (
    <>
      {!isAdminPage && <Header />}
      {!isAdminPage && <WhatsAppButton />}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/soleil" element={<CategoryPage categorie="soleil" lunettesData={lunettesData} />} />
        <Route path="/photogrey" element={<CategoryPage categorie="photogrey" lunettesData={lunettesData} />} />
        <Route path="/enfant" element={<CategoryPage categorie="enfant" lunettesData={lunettesData} />} />
        <Route path="/ordonnance" element={<OrdonnancePage />} />
        <Route path="/lentilles" element={<LentillesPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>

      {/* Footer - Visible seulement sur les pages client */}
      {!isAdminPage && (
        <footer className="bg-black text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl">👓</span>
                  </div>
                  <h2 className="text-4xl font-black tracking-tighter">PETER OPTIQUE</h2>
                </div>
                <p className="text-gray-400 max-w-md text-lg">
                  Lunettes de qualité premium à prix accessibles. 
                  Soleil, Photogrey et de vue avec livraison partout au Sénégal.
                </p>
              </div>

              <div className="md:col-span-3">
                <h3 className="text-lg font-semibold mb-6 text-orange-400">Navigation</h3>
                <div className="flex flex-col gap-3 text-gray-400">
                  <Link to="/" className="hover:text-white transition">Accueil</Link>
                  <Link to="/soleil" className="hover:text-white transition">Lunettes de Soleil</Link>
                  <Link to="/photogrey" className="hover:text-white transition">Lunettes Photogrey</Link>
                  <Link to="/enfant" className="hover:text-white transition">Lunettes Enfant</Link>
                  <Link to="/ordonnance" className="hover:text-white transition">Déposer Ordonnance</Link>
                  <Link to="/lentilles" className="hover:text-white transition">Changer de Lentilles</Link>
                </div>
              </div>

              <div className="md:col-span-4">
                <h3 className="text-lg font-semibold mb-6 text-orange-400">Besoin d'aide ?</h3>
                <p className="text-gray-400 mb-6">
                  Envoyez-nous un message, nous vous répondons en moins de 10 minutes.
                </p>
                <a href="https://wa.me/221767913986" target="_blank" className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-2xl transition-all">
                  <span>💬</span> Discuter sur WhatsApp
                </a>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
              <p>© 2026 Peter Optique - Tous droits réservés - Dakar, Sénégal</p>
              <p className="mt-4 md:mt-0">Conçu avec ❤️ pour offrir le meilleur style</p>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}