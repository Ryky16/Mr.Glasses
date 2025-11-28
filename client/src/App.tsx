import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { Phone, Upload, Sun, Eye, Sparkles, Baby, ShieldCheck, Truck } from 'lucide-react'

// Données temporaires (plus tard tu les géreras depuis l'admin)
const lunettesData = [
  { id: 1, nom: "Aviator Gold Premium", prix: "38 000 FCFA", categorie: "soleil", genre: "homme", nouveau: true },
  { id: 2, nom: "Cat Eye Fashion 2025", prix: "42 000 FCFA", categorie: "soleil", genre: "femme", promo: true },
  { id: 3, nom: "Photogrey Intelligent React", prix: "52 000 FCFA", categorie: "photogrey", genre: "mixte" },
  { id: 4, nom: "Photogrey Élégance", prix: "48 000 FCFA", categorie: "photogrey", genre: "femme" },
  { id: 5, nom: "Mickey Adventure", prix: "28 000 FCFA", categorie: "enfant", genre: "enfant" },
  { id: 6, nom: "Sport Pro Shield", prix: "60 000 FCFA", categorie: "soleil", genre: "homme" },
]

function Header() {
  const location = useLocation()
  const isActive = (path: string) => location.pathname === path ? "text-orange-500 border-b-4 border-orange-500" : "text-gray-700 hover:text-orange-500"

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center">
            <Eye className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-black bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            PETER OPTIQUE
          </h1>
        </Link>

        <nav className="flex flex-wrap justify-center gap-3 sm:gap-8 text-lg font-semibold">
          <Link to="/" className={isActive("/") + " pb-2 px-2"}>Accueil</Link>
          <Link to="/soleil" className={isActive("/soleil") + " pb-2 px-2"}>Lunettes de Soleil</Link>
          <Link to="/photogrey" className={isActive("/photogrey") + " pb-2 px-2"}>Photogrey</Link>
          <Link to="/enfant" className={isActive("/enfant") + " pb-2 px-2"}>Enfant</Link>
          <Link to="/ordonnance" className="pb-2 px-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full hover:shadow-xl transition">
            Déposer Ordonnance
          </Link>
        </nav>
      </div>
    </header>
  )
}

function WhatsAppButton({ model }: { model?: string }) {
  const phone = "221767913986"
  const message = model 
    ? `Bonjour Peter Optique. Je suis intéressé(e) par : *${model}*` 
    : `Bonjour Peter Optique. Je viens du site web`

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-5 shadow-2xl z-50 animate-pulse flex items-center justify-center"
    >
      <Phone className="w-8 h-8" />
      <span className="absolute -top-10 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 hover:opacity-100 transition">
        WhatsApp
      </span>
    </a>
  )
}

function Card({ lunette }: { lunette: any }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
      <div className="relative">
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-96 flex items-center justify-center">
          <Sun className="w-40 h-40 text-gray-400" />
        </div>
        {lunette.nouveau && <span className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">NOUVEAU</span>}
        {lunette.promo && <span className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">PROMO</span>}
        <span className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
          {lunette.genre.toUpperCase()}
        </span>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{lunette.nom}</h3>
        <p className="text-orange-600 font-semibold text-lg mb-4">À partir de {lunette.prix}</p>
        <button
          onClick={() => window.open(`https://wa.me/221767913986?text=Bonjour, je veux la *${lunette.nom}* (${lunette.prix})`, '_blank')}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-5 rounded-2xl text-xl transition transform hover:scale-105"
        >
          Commander sur WhatsApp
        </button>
      </div>
    </div>
  )
}

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 py-24 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-6">Lunettes de Rêve<br/>à Prix Sénégalais</h2>
          <p className="text-2xl mb-10">Livraison partout : Dakar • Thiès • Saint-Louis • Kaolack • Ziguinchor</p>
          <button onClick={() => window.open("https://wa.me/221767913986?text=Bonjour Peter Optique", '_blank')}
            className="bg-white text-blue-600 font-black text-2xl px-12 py-6 rounded-3xl hover:shadow-2xl transform hover:scale-110 transition">
            Voir tout le catalogue WhatsApp
          </button>
        </div>
      </section>

      {/* Grille accueil */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
          Top Modèles du Moment
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {lunettesData.slice(0, 6).map(l => <Card key={l.id} lunette={l} />)}
        </div>
      </section>
    </>
  )
}

function CategoryPage({ categorie }: { categorie: string }) {
  const filtered = lunettesData.filter(l => l.categorie === categorie)
  const title = {
    soleil: "Lunettes de Soleil",
    photogrey: "Lunettes Photogrey",
    enfant: "Lunettes Enfant"
  }[categorie]

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-12">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filtered.map(l => <Card key={l.id} lunette={l} />)}
      </div>
    </section>
  )
}

function OrdonnancePage() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto text-center">
      <Upload className="w-24 h-24 mx-auto text-teal-500 mb-8" />
      <h2 className="text-5xl font-bold mb-8">Envoyez-nous votre ordonnance</h2>
      <p className="text-2xl mb-12">Prenez une photo nette de votre ordonnance et envoyez-la maintenant. Nous vous répondons en moins de 10 minutes avec le prix exact !</p>
      <button onClick={() => window.open("https://wa.me/221767913986?text=Bonjour, voici ma photo d'ordonnance", '_blank')}
        className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-bold text-2xl px-16 py-8 rounded-3xl shadow-2xl transform hover:scale-105 transition">
        Envoyer l'ordonnance sur WhatsApp
      </button>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <WhatsAppButton />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/soleil" element={<CategoryPage categorie="soleil" />} />
        <Route path="/photogrey" element={<CategoryPage categorie="photogrey" />} />
        <Route path="/enfant" element={<CategoryPage categorie="enfant" />} />
        <Route path="/ordonnance" element={<OrdonnancePage />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-700 to-teal-700 text-white py-16 text-center">
        <p className="text-4xl font-black">PETER OPTIQUE</p>
        <p className="text-2xl mt-4">WhatsApp : +221 76 791 3986</p>
        <p className="mt-6">© 2025 – Tous droits réservés – Dakar, Sénégal</p>
      </footer>
    </>
  )
}