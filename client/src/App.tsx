import { useState } from 'react'
import { Phone, Sun, Eye, Sparkles, Truck, ShieldCheck } from 'lucide-react'

export default function App() {
  const phone = "221767913986"
  const wa = (msg: string) => window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank')

  const lunettes = [
    { nom: "Aviator Gold Edition", prix: "38 000 FCFA", type: "Solaire", nouveau: true },
    { nom: "Photogrey Intelligent Pro", prix: "48 000 FCFA", type: "Photogrey", promo: true },
    { nom: "Lunettes de vue Premium", prix: "Sur devis", type: "Vue", ordonnance: true },
    { nom: "Sport Performance", prix: "55 000 FCFA", type: "Solaire", nouveau: true },
    { nom: "Enfant Mickey 2025", prix: "28 000 FCFA", type: "Enfant", promo: true },
    { nom: "Carrera Black Edition", prix: "45 000 FCFA", type: "Photogrey" },
  ]

  return (
    <>
      {/* Bouton WhatsApp flottant */}
      <button onClick={() => wa("Bonjour Peter Optique 👋 Je regarde vos lunettes")} className="btn-whatsapp">
        <Phone className="w-9 h-9" />
      </button>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-teal-500 to-cyan-500 py-24">
        <div className="absolute inset-0 bg-white opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="title-gradient mb-6 animate-fade-in">
            PETER OPTIQUE
          </h1>
          <p className="text-white text-2xl md:text-4xl font-semibold mb-10">
            Vos lunettes de rêve à prix doux
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button onClick={() => wa("Bonjour, je veux voir tout le catalogue")} className="btn-primary text-xl">
              Voir le catalogue complet
            </button>
            <button onClick={() => wa("Bonjour, j'ai une ordonnance")} className="bg-white text-blue-600 font-bold py-5 px-10 rounded-2xl text-xl hover:bg-gray-100 transition">
              Envoyer mon ordonnance
            </button>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[{icon: Sparkles, text: "Modèles 2025"}, {icon: Truck, text: "Livraison partout"}, {icon: ShieldCheck, text: "Garantie 1 an"}, {icon: Phone, text: "Réponse en 2 min"}].map((i, idx) => (
            <div key={idx} className="animate-fade-up" style={{animationDelay: `${idx*200}ms`}}>
              <i.icon className="w-12 h-12 mx-auto text-orange-500 mb-3" />
              <p className="font-semibold">{i.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Grille lunettes */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
          Nos meilleures ventes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {lunettes.map((l, i) => (
            <div key={i} className="card animate-fade-up" style={{animationDelay: `${i*150}ms`}}>
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-80 flex items-center justify-center">
                  <Sun className="w-32 h-32 text-gray-500" />
                </div>
                {l.nouveau && <span className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">Nouveau</span>}
                {l.promo && <span className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">Promo</span>}
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{l.nom}</h3>
                <p className="text-gray-600 mb-4">{l.type}</p>
                <p className="text-3xl font-extrabold text-orange-500 mb-6">{l.prix}</p>
                <button 
                  onClick={() => wa(`Bonjour 👋\nJe veux la : *${l.nom}* (${l.prix})\nC'est encore dispo ?`)}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-5 rounded-2xl text-xl transition transform hover:scale-105">
                  Commander sur WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-12 text-center">
        <p className="text-3xl font-bold">Peter Optique • Dakar & Toute le Sénégal</p>
        <p className="text-xl mt-4">WhatsApp : +221 76 791 3986</p>
      </footer>
    </>
  )
}