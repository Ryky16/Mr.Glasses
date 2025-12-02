import { useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { Phone, Upload, CheckCircle, Image as ImageIcon, FileText, Sun, Menu, X, Eye } from 'lucide-react'

interface Lunette {
  id: number;
  nom: string;
  prix: string;
  categorie: string;
  genre: string;
  nouveau?: boolean;
  promo?: boolean;
}

// Données temporaires (plus tard tu les géreras depuis l'admin)
const lunettesData: Lunette[] = [
  { id: 1, nom: "Aviator Gold Premium", prix: "38 000 FCFA", categorie: "soleil", genre: "homme", nouveau: true },
  { id: 2, nom: "Cat Eye Fashion 2025", prix: "42 000 FCFA", categorie: "soleil", genre: "femme", promo: true },
  { id: 3, nom: "Photogrey Intelligent React", prix: "52 000 FCFA", categorie: "photogrey", genre: "mixte" },
  { id: 4, nom: "Photogrey Élégance", prix: "48 000 FCFA", categorie: "photogrey", genre: "femme" },
  { id: 5, nom: "Mickey Adventure", prix: "28 000 FCFA", categorie: "enfant", genre: "enfant" },
  { id: 6, nom: "Sport Pro Shield", prix: "60 000 FCFA", categorie: "soleil", genre: "homme" },
]

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  
  const isActive = (path: string) => 
    location.pathname === path ? "text-orange-500 font-bold" : "text-gray-700 hover:text-orange-500"

  const navItems = [
    { label: "Accueil", path: "/" },
    { label: "Lunettes de Soleil", path: "/soleil" },
    { label: "Photogrey", path: "/photogrey" },
    { label: "Enfant", path: "/enfant" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent hidden sm:block">
              PETER OPTIQUE
            </h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-lg font-medium">
            {navItems.map(item => (
              <Link key={item.path} to={item.path} className={isActive(item.path) + " transition"}>
                {item.label}
              </Link>
            ))}
            <Link 
              to="/ordonnance" 
              className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-3 rounded-full font-bold hover:shadow-xl transition transform hover:scale-105"
            >
              Déposer Ordonnance
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-3 rounded-lg hover:bg-gray-100 transition"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Fond semi-transparent */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu qui glisse depuis la droite */}
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-black text-teal-600">Menu</h2>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                  <X className="w-8 h-8" />
                </button>
              </div>
            </div>

            <nav className="p-6 space-y-6">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-2xl font-semibold transition ${isActive(item.path)}`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/ordonnance"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-5 px-8 rounded-2xl text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition"
              >
                Déposer Ordonnance
              </Link>
            </nav>

            <div className="absolute bottom-8 left-6 right-6">
              <div className="bg-gray-100 rounded-2xl p-6 text-center">
                <p className="text-sm text-gray-600">Besoin d’aide ?</p>
                <a href="https://wa.me/221767913986" className="inline-flex items-center gap-3 mt-3 text-green-600 font-bold text-lg">
                  <Phone className="w-6 h-6" />
                  +221 76 791 39 86
                </a>
              </div>
            </div>
          </div>
        </>
      )}
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

function Card({ lunette }: { lunette: Lunette }) {
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
  const [prenom, setPrenom] = useState('')
  const [telephone, setTelephone] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [isSending, setIsSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      // Prévisualisation si c'est une image
      if (selectedFile.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onloadend = () => setPreview(reader.result as string)
        reader.readAsDataURL(selectedFile)
      } else {
        setPreview(null)
      }
    }
  }

  const sendToWhatsApp = () => {
    if (!file || !prenom || !telephone) {
      alert("Veuillez remplir tous les champs et choisir une ordonnance")
      return
    }

    setIsSending(true)

    // Conversion du fichier en base64
    const reader = new FileReader()
    reader.onloadend = () => {
      const base64data = reader.result?.toString().split(',')[1] // on enlève le préfixe data:...
      const fileName = file.name
      const mimeType = file.type || 'application/octet-stream'

      const message = `🟢 NOUVELLE ORDONNANCE REÇUE !\n\n` +
        `👤 Nom : *${prenom}*\n` +
        `📞 Téléphone : *${telephone}*\n\n` +
        `📎 Fichier : ${fileName}\n` +
        `Envoyé depuis le site Peter Optique`

      // URL spéciale WhatsApp avec pièce jointe base64
      const whatsappURL = `https://wa.me/221767913986?text=${encodeURIComponent(message)}&attachment=${encodeURIComponent(
        `data:${mimeType};base64,${base64data}`
      )}`

      window.open(whatsappURL, '_blank')
      setSent(true)
      setIsSending(false)

      // Reset après 5 secondes
      setTimeout(() => {
        setPrenom('')
        setTelephone('')
        setFile(null)
        setPreview(null)
        setSent(false)
      }, 5000)
    }
    reader.readAsDataURL(file)
  }

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <Upload className="w-20 h-20 mx-auto text-teal-500 mb-6" />
        <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent mb-4">
          Déposez votre ordonnance
        </h1>
        <p className="text-xl text-gray-600">
          Prenez une photo nette ou envoyez votre PDF → Réponse sous 10 minutes avec le prix exact !
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <label className="block text-lg font-semibold mb-3">Votre prénom</label>
            <input
              type="text"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              placeholder="Ex: Fatou Diop"
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-teal-500 focus:outline-none text-lg"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-3">Votre téléphone</label>
            <input
              type="tel"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              placeholder="Ex: 77 123 45 67"
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-teal-500 focus:outline-none text-lg"
            />
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-lg font-semibold mb-4">
            Photo ou PDF de votre ordonnance
          </label>
          
          <div className="border-4 border-dashed border-gray-300 rounded-3xl p-12 text-center hover:border-teal-400 transition">
            <input
              type="file"
              accept="image/*,application/pdf"
              onChange={handleFileChange}
              className="hidden"
              id="ordonnance-file"
            />
            <label htmlFor="ordonnance-file" className="cursor-pointer">
              {preview ? (
                <div className="space-y-4">
                  <img src={preview} alt="Prévisualisation" className="mx-auto max-h-80 rounded-2xl shadow-lg" />
                  <p className="text-green-600 font-bold flex items-center justify-center gap-2">
                    <CheckCircle className="w-6 h-6" /> Fichier prêt !
                  </p>
                </div>
              ) : file ? (
                <div className="flex flex-col items-center gap-4">
                  <FileText className="w-16 h-16 text-blue-500" />
                  <p className="text-lg font-semibold">{file.name}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <ImageIcon className="w-16 h-16 mx-auto text-gray-400" />
                  <p className="text-xl text-gray-600">Cliquez pour choisir une photo ou PDF</p>
                  <p className="text-sm text-gray-500">Formats acceptés : JPG, PNG, PDF</p>
                </div>
              )}
            </label>
          </div>
        </div>

        <button
          onClick={sendToWhatsApp}
          disabled={isSending || sent}
          className={`w-full py-6 rounded-3xl font-black text-2xl transition transform hover:scale-105 flex items-center justify-center gap-4 ${
            sent 
              ? "bg-green-600 text-white" 
              : isSending 
              ? "bg-gray-400 text-white cursor-not-allowed" 
              : "bg-gradient-to-r from-teal-500 to-cyan-600 text-white hover:shadow-2xl"
          }`}
        >
          {sent ? (
            <>Envoyé avec succès ! ✅</>
          ) : isSending ? (
            <>Envoi en cours...</>
          ) : (
            <>
              Envoyer sur WhatsApp <Phone className="w-8 h-8" />
            </>
          )}
        </button>

        {sent && (
          <p className="text-center mt-6 text-green-600 font-bold text-xl">
            Merci {prenom} ! Tu vas recevoir une réponse sous 10 minutes 📲
          </p>
        )}
      </div>
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
        <p className="text-2xl mt-4">WhatsApp : +221 76 791 39 86</p>
        <p className="mt-6">© 2025 – Tous droits réservés – Dakar, Sénégal</p>
      </footer>
    </>
  )
}
