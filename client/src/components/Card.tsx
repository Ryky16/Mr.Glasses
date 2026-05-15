import type { Lunette } from '../types/Lunette';

export function Card({ lunette }: { lunette: Lunette }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group">
      
      {/* Image plus grande et plus visible */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={`/images/${lunette.image}`} 
          alt={lunette.nom}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src = "https://via.placeholder.com/600x400?text=Photo+non+disponible";
          }}
        />
        
        {lunette.nouveau && (
          <span className="absolute top-5 left-5 bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg">
            NOUVEAU
          </span>
        )}
        {lunette.promo && (
          <span className="absolute top-5 left-5 bg-red-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg">
            PROMO
          </span>
        )}
        
        <span className="absolute top-5 right-5 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow">
          {lunette.genre.toUpperCase()}
        </span>
      </div>

      {/* Contenu de la carte */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-3 line-clamp-2 min-h-[64px]">
          {lunette.nom}
        </h3>
        
        <p className="text-3xl font-bold text-orange-500 mb-8">
          {lunette.prix}
        </p>

        <button
          onClick={() =>
            window.open(
              `https://wa.me/221767913986?text=Bonjour%20Peter%20Optique,%20je%20veux%20la%20*${encodeURIComponent(lunette.nom)}*%20(${lunette.prix})`,
              '_blank'
            )
          }
          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-5 rounded-2xl text-lg transition-all hover:scale-105 active:scale-95 shadow-lg"
        >
          Commander sur WhatsApp
        </button>
      </div>
    </div>
  );
}