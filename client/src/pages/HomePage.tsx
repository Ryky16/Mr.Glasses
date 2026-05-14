import { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import { lunettesData } from '../data/lunettesData';
import { ArrowRight } from 'lucide-react';

export function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroLunettes = lunettesData.slice(0, 8); // Plus de modèles dans le hero

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroLunettes.length);
    }, 5000); // Défilement toutes les 5 secondes (plus professionnel)

    return () => clearInterval(interval);
  }, [heroLunettes.length]);

  const currentLunette = heroLunettes[currentSlide];

  return (
    <>
      {/* HERO PREMIUM 2026 */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* Images de fond en défilement doux */}
        {heroLunettes.map((lunette, index) => (
          <div
            key={lunette.id}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1500 ease-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{ backgroundImage: `url(/images/${lunette.image})` }}
          />
        ))}

        {/* Overlay sophistiqué */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* Contenu principal */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-8 py-3 rounded-full border border-white/20">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white text-sm font-medium tracking-widest">COLLECTION 2026 • SÉNÉGAL</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tighter mb-6">
            LE STYLE<br />
            <span className="bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-300 bg-clip-text text-transparent">
              QUI VOUS RESSEMBLE
            </span>
          </h1>

          {/* Informations du modèle actuel */}
          <div className="mb-10 min-h-[80px]">
            <p className="text-3xl md:text-4xl font-semibold text-white drop-shadow-md">
              {currentLunette.nom}
            </p>
            <p className="text-2xl text-orange-400 font-bold mt-2">
              À partir de {currentLunette.prix}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="https://wa.me/221767913986?text=Bonjour%20Peter%20Optique%2C%20je%20suis%20intéressé%20par%20la%20collection"
              target="_blank"
              className="group bg-white hover:bg-yellow-400 text-black font-bold text-xl px-12 py-6 rounded-3xl flex items-center gap-4 transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Commander sur WhatsApp
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition" />
            </a>

            <a
              href="/ordonnance"
              className="border-2 border-white/80 hover:border-white text-white font-semibold text-xl px-10 py-6 rounded-3xl hover:bg-white/10 backdrop-blur transition-all"
            >
              Déposer mon ordonnance
            </a>
          </div>
        </div>

        {/* Contrôles du slider */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-4 z-20">
          {heroLunettes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentSlide 
                  ? 'bg-white w-12' 
                  : 'bg-white/40 hover:bg-white/70 w-8'
              }`}
            />
          ))}
        </div>

        {/* Scroll prompt */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center text-sm tracking-widest">
          DÉCOUVREZ NOS MODÈLES
          <span className="text-3xl mt-2 animate-bounce">↓</span>
        </div>
      </section>

      {/* Section Meilleures Ventes */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-white">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">Nos Modèles les Plus Demandés</h2>
          <p className="text-xl text-gray-600">Qualité premium • Style intemporel</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {lunettesData.map((lunette) => (
            <Card key={lunette.id} lunette={lunette} />
          ))}
        </div>
      </section>
    </>
  );
}