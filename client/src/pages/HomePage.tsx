import { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import { lunettesData } from '../data/lunettesData';
import { ArrowRight } from 'lucide-react';

export function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Prends uniquement les 6 premières lunettes pour le hero (tu peux changer)
  const heroLunettes = lunettesData.slice(0, 6);

  // Animation automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroLunettes.length);
    }, 4500); // Change toutes les 4.5 secondes

    return () => clearInterval(interval);
  }, [heroLunettes.length]);

  return (
    <>
      {/* HERO SECTION - Version 2026 */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* Arrière-plans avec tes vraies photos */}
        {heroLunettes.map((lunette, index) => (
          <div
            key={lunette.id}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
            style={{
              backgroundImage: `url(/images/${lunette.image})`,
            }}
          />
        ))}

        {/* Overlay sombre élégant */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        {/* Contenu */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full mb-6 border border-white/20">
            <span className="text-yellow-400">✦</span>
            <span className="text-white text-sm tracking-widest font-medium">PETER OPTIQUE - DAKAR</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-6 tracking-tighter">
            LUNETTES QUI<br />
            <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
              RACONTENT TON STYLE
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-10">
            Collection 2026  - Soleil • Photogrey • Vue<br />
            Qualité Premium • Prix accessibles • Livraison partout au Sénégal
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a
              href="https://wa.me/221767913986?text=Bonjour%20Peter%20Optique%2C%20je%20veux%20d%C3%A9couvrir%20votre%20collection"
              target="_blank"
              className="group bg-white text-black font-bold text-xl px-10 py-5 rounded-2xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-2xl"
            >
              Découvrir la Collection
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </a>

            <a
              href="/ordonnance"
              className="border-2 border-white text-white font-bold text-xl px-10 py-5 rounded-2xl hover:bg-white hover:text-black transition-all"
            >
              Déposer mon ordonnance
            </a>
          </div>
        </div>

        {/* Indicateurs du slider */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-10">
          {heroLunettes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-5 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm flex flex-col items-center gap-1 animate-bounce">
          <span className="text-2xl"></span>
        </div>
      </section>

      {/* Section Meilleures Ventes */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">Nos Modèles Phares</h2>
          <p className="text-xl text-gray-600">Sélectionnés pour leur qualité et leur style</p>
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