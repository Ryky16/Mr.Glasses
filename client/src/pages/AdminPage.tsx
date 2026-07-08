import { useState } from 'react';
import { Plus, Edit2, Trash2, LogOut } from 'lucide-react';
import type { Lunette } from '../types/Lunette';
import { lunettesData } from '../data/lunettesData';

export function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  type TabKey = 'hero' | 'featured' | 'soleil' | 'photogrey' | 'enfant';
  const [activeTab, setActiveTab] = useState<TabKey>('soleil');
  const [models, setModels] = useState<Lunette[]>(lunettesData);

  const ADMIN_PASSWORD = "peter2025"; // Change ce mot de passe plus tard

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError("Mot de passe incorrect");
    }
  };

  const deleteModel = (id: number) => {
    if (window.confirm("Voulez-vous vraiment supprimer ce modèle ?")) {
      setModels(models.filter(m => m.id !== id));
    }
  };

  const filteredModels = models.filter(m => {
    if (activeTab === 'hero' || activeTab === 'featured') return true; // Temporaire
    return m.categorie === activeTab;
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center p-6">
        <div className="bg-white dark:bg-gray-900 p-10 rounded-3xl shadow-2xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8">Administration Peter Optique</h2>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 border border-gray-300 dark:border-gray-700 rounded-2xl mb-4 focus:border-orange-500"
              placeholder="Mot de passe Admin"
            />
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <button type="submit" className="w-full bg-black text-white py-4 rounded-2xl font-bold hover:bg-gray-800">
              Se Connecter
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* ==================== ADMIN HEADER ==================== */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center">
              👓
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight">PETER OPTIQUE</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">Administration</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="bg-black text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-3 hover:bg-gray-800 transition">
              <Plus size={20} /> Ajouter un Nouveau Modèle
            </button>
            <button className="text-gray-500 hover:text-red-500 transition">
              <LogOut size={24} />
            </button>
          </div>
        </div>

        {/* Tabs de navigation */}
        <div className="border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-6 flex overflow-x-auto">
            {([
              { key: 'soleil', label: 'Lunettes de Soleil' },
              { key: 'photogrey', label: 'Lunettes Photogrey' },
              { key: 'enfant', label: 'Lunettes Enfant' },
              { key: 'hero', label: 'Hero' },
              { key: 'featured', label: 'Nos Modèles Demandés' },
            ] as { key: TabKey; label: string }[]).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-8 py-5 font-medium whitespace-nowrap transition-all border-b-4 ${
                  activeTab === tab.key 
                    ? 'border-orange-500 text-orange-500' 
                    : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredModels.map((model) => (
            <div key={model.id} className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
              <div className="relative h-64">
                <img 
                  src={`/images/${model.image}`} 
                  alt={model.nom} 
                  className="w-full h-full object-cover"
                  onError={(e) => e.currentTarget.src = "https://via.placeholder.com/600x400?text=Photo+non+disponible"}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 line-clamp-2">{model.nom}</h3>
                <p className="text-orange-500 font-bold mb-6">{model.prix}</p>
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 text-white py-3 rounded-2xl flex items-center justify-center gap-2 hover:bg-blue-700">
                    <Edit2 size={18} /> Modifier
                  </button>
                  <button 
                    onClick={() => deleteModel(model.id)}
                    className="flex-1 bg-red-600 text-white py-3 rounded-2xl flex items-center justify-center gap-2 hover:bg-red-700"
                  >
                    <Trash2 size={18} /> Supprimer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}