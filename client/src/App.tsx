import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import { OrdonnancePage } from './pages/OrdonnancePage';
import { lunettesData } from './data/lunettesData';

export default function App() {
  return (
    <>
      <Header />
      <WhatsAppButton />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/soleil"
          element={<CategoryPage categorie="soleil" lunettesData={lunettesData} />}
        />
        <Route
          path="/photogrey"
          element={<CategoryPage categorie="photogrey" lunettesData={lunettesData} />}
        />
        <Route
          path="/enfant"
          element={<CategoryPage categorie="enfant" lunettesData={lunettesData} />}
        />
        <Route path="/ordonnance" element={<OrdonnancePage />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-700 to-teal-700 text-white py-16 text-center">
        <p className="text-4xl font-black">PETER OPTIQUE</p>
        <p className="text-2xl mt-4">WhatsApp : +221 76 791 39 86</p>
        <p className="mt-6">© 2025 – Tous droits réservés – Dakar, Sénégal</p>
      </footer>
    </>
  );
}