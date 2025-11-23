import { useState } from 'react'
import { Headphones, Sun, Eye, Clock, MapPin, Phone } from 'lucide-react'

export default function App() {
  const phone = "221767913986" // sans le +
  const openWhatsApp = (model: string) => {
    const message = `Bonjour Peter Optique 👋\nJe suis intéressé par : *${model}*\nPouvez-vous me donner plus d'infos et le prix s'il vous plaît ?`
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank')
  }

  // Exemples de lunettes (tu les remplaceras plus tard depuis l'admin)
  const lunettes = [
    { id: 1, nom: "Ray-Ban Aviator Classic", prix: "35 000 FCFA", categorie: "Solaire", type: "Homme" },
    { id: 2, nom: "Photogrey Intelligent", prix: "45 000 FCFA", categorie: "Photogrey", type: "Mixte" },
    { id: 3, nom: "Lunettes de vue Anti-lumière bleue", prix: "Sur devis", categorie: "Vue", type: "Femme" },
    { id: 4, nom: "Oakley Sport", prix: "55 000 FCFA", categorie: "Solaire", type: "Homme" },
    { id: 5, nom: "Lunettes Enfants Disney", prix: "25 000 FCFA", categorie: "Solaire", type: "Enfant" },
    { id: 6, nom: "Carrera Pilot", prix: "40 000 FCFA", categorie: "Photogrey", type: "Mixte" },
  ]

  return (
    <>
      {/* Bouton WhatsApp flottant géant */}
      <a href={`https://wa.me/${phone}?text=Bonjour%20Peter%20Optique%20%F0%9F%91%8B%20Je%20visite%20votre%20site`} 
         className="btn-whatsapp" target="_blank">
        <Phone className="w-8 h-8" />
      </a>

      {/* Header */}
      <header className="bg-black border-b-4 border-yellow-400 py-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-400">
            PETER OPTIQUE
          </h1>
          <div className="flex items-center gap-3 bg-green-600 px-4 py-2 rounded-full">
            <Phone className="w-5 h-5" />
            <span className="font-bold">+221 76 791 3986</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-yellow-600 to-yellow-400 py-16 text-black">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Lunettes de Qualité à Prix Doux
          </h2>
          <p className="text-2xl mb-8">Dakar • Thiès • Saint-Louis • Toute la livraison Sénégal</p>
          <button onClick={() => openWhatsApp("votre catalogue complet")} 
                  className="btn-jaune text-2xl px-12 py-6">
            Voir toutes les lunettes sur WhatsApp 📲
          </button>
        </div>
      </section>

      {/* Grille des lunettes */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">
          Nos Modèles les Plus Vendus
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lunettes.map(l => (
            <div key={l.id} className="card-lunette">
              {/* Image placeholder (tu mettras les vraies après) */}
              <div className="bg-gray-800 h-64 flex items-center justify-center">
                <Eye className="w-24 h-24 text-gray-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-yellow-400">{l.nom}</h3>
                <p className="text-gray-400 mt-2">{l.categorie} • {l.type}</p>
                <p className="text-3xl font-bold mt-4">{l.prix}</p>
                <button 
                  onClick={() => openWhatsApp(l.nom + " - " + l.prix)}
                  className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl text-xl transition">
                  Commander sur WhatsApp 🚀
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-center">
        <p className="text-yellow-400 text-xl">Peter Optique © 2025 - Tous droits réservés</p>
        <p className="mt-4">Dakar, Sénégal • Livraison partout au Sénégal</p>
      </footer>
    </>
  )
}