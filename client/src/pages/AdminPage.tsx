import { useState } from 'react';
import { Plus, Edit2, Trash2, LogOut, Save, X, RefreshCw } from 'lucide-react';
import type { Lunette } from '../types/Lunette';
import { useData } from '../context/DataContext';
import { heroData } from '../data/heroData';
import { featuredData } from '../data/featuredData';

export function AdminPage() {
  const { models, addModel, updateModel, deleteModel: contextDeleteModel, resetToDefault } = useData();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'hero' | 'featured' | 'soleil' | 'photogrey' | 'enfant'>('soleil');
  const [showForm, setShowForm] = useState(false);
  const [editingModel, setEditingModel] = useState<Lunette | null>(null);
  const [formData, setFormData] = useState<Partial<Lunette>>({});

  const ADMIN_PASSWORD = "peter2025";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError("Mot de passe incorrect");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
  };

  const openAddForm = () => {
    setEditingModel(null);
    setFormData({});
    setShowForm(true);
  };

  const openEditForm = (model: Lunette) => {
    setEditingModel(model);
    setFormData({ ...model });
    setShowForm(true);
  };

  const saveModel = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nom || !formData.prix || !formData.categorie || !formData.image) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }

    const newModel: Lunette = {
      id: editingModel ? editingModel.id : Date.now(),
      nom: formData.nom!,
      prix: formData.prix!,
      categorie: formData.categorie!,
      genre: formData.genre || 'mixte',
      image: formData.image!,
      nouveau: formData.nouveau || false,
      promo: formData.promo || false,
    };

    if (editingModel) {
      updateModel(editingModel.id, newModel);
    } else {
      addModel(newModel);
    }

    setShowForm(false);
    setEditingModel(null);
    alert("✅ Modèle sauvegardé avec succès !");
  };

  const deleteModel = (id: number) => {
    if (window.confirm("Voulez-vous vraiment supprimer ce modèle ?")) {
      contextDeleteModel(id);
    }
  };

  const getCurrentModels = () => {
    switch (activeTab) {
      case 'hero': return heroData.map((item, index) => ({ ...item, id: 1000 + index, categorie: 'hero' as const, genre: 'mixte' as const }));
      case 'featured': return featuredData;
      case 'soleil': return models.filter(m => m.categorie === 'soleil');
      case 'photogrey': return models.filter(m => m.categorie === 'photogrey');
      case 'enfant': return models.filter(m => m.categorie === 'enfant');
      default: return [];
    }
  };

  const currentModels = getCurrentModels();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center p-6">
        <div className="bg-white dark:bg-gray-900 p-10 rounded-3xl shadow-2xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8">Accès Administrateur</h2>
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-black">Administration Peter Optique</h1>
          <div className="flex gap-4">
            <button 
              onClick={resetToDefault}
              className="flex items-center gap-3 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-4 rounded-2xl font-bold transition"
            >
              <RefreshCw size={20} />
              Réinitialiser
            </button>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-bold transition"
            >
              <LogOut size={20} />
              Déconnexion
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 dark:border-gray-700 mb-10 overflow-x-auto">
          {[
            { key: 'hero' as const, label: 'Hero (Accueil)' },
            { key: 'featured' as const, label: 'Nos Modèles Demandés' },
            { key: 'soleil' as const, label: 'Lunettes de Soleil' },
            { key: 'photogrey' as const, label: 'Lunettes Photogrey' },
            { key: 'enfant' as const, label: 'Lunettes Enfant' },
          ].map((tab) => (
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

        <div className="mb-8 flex justify-end">
          <button 
            onClick={openAddForm}
            className="bg-black text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-gray-800 transition"
          >
            <Plus size={20} /> Ajouter un Nouveau Modèle
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {currentModels.map((model) => (
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
                  <button 
                    onClick={() => openEditForm(model)}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-2xl flex items-center justify-center gap-2 hover:bg-blue-700"
                  >
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

      {/* Modal Formulaire */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-6">
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 w-full max-w-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">{editingModel ? 'Modifier le Modèle' : 'Ajouter un Nouveau Modèle'}</h2>
              <button onClick={() => setShowForm(false)}><X size={28} /></button>
            </div>

            <form onSubmit={saveModel} className="space-y-6">
              <input
                type="text"
                placeholder="Nom du modèle"
                value={formData.nom || ''}
                onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                className="w-full px-5 py-4 border border-gray-300 dark:border-gray-700 rounded-2xl"
                required
              />
              <input
                type="text"
                placeholder="Prix (ex: 38 000 FCFA)"
                value={formData.prix || ''}
                onChange={(e) => setFormData({ ...formData, prix: e.target.value })}
                className="w-full px-5 py-4 border border-gray-300 dark:border-gray-700 rounded-2xl"
                required
              />
              <select
                value={formData.categorie || ''}
                onChange={(e) => setFormData({ ...formData, categorie: e.target.value as 'soleil' | 'photogrey' | 'enfant' })}
                className="w-full px-5 py-4 border border-gray-300 dark:border-gray-700 rounded-2xl"
                required
              >
                <option value="">Sélectionner la catégorie</option>
                <option value="soleil">Lunettes de Soleil</option>
                <option value="photogrey">Lunettes Photogrey</option>
                <option value="enfant">Lunettes Enfant</option>
              </select>
              <input
                type="text"
                placeholder="Nom de l'image (ex: aviator.jpg)"
                value={formData.image || ''}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full px-5 py-4 border border-gray-300 dark:border-gray-700 rounded-2xl"
                required
              />
              <div className="flex gap-4">
                <button type="submit" className="flex-1 bg-green-600 text-white py-4 rounded-2xl font-bold hover:bg-green-700">
                  <Save className="inline mr-2" /> Sauvegarder
                </button>
                <button type="button" onClick={() => setShowForm(false)} className="flex-1 bg-gray-300 dark:bg-gray-700 py-4 rounded-2xl font-bold">
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}