import type { Lunette } from '../types/Lunette';

export function Card({ lunette }: { lunette: Lunette }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 group">
      
      {/* Image encore plus grande */}
      <div className="relative h-[320px] overflow-hidden">
        <img 
          src={`/images/${lunette.image}`} 
          alt={lunette.nom}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src = "https://via.placeholder.com/300x400?text=Photo+non+disponible";
          }}
        />
        
        {lunette.nouveau && (
          <span className="absolute top-6 left-6 bg-orange-500 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg z-10">
            NOUVEAU
          </span>
        )}
        {lunette.promo && (
          <span className="absolute top-6 left-6 bg-red-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg z-10">
            PROMO
          </span>
        )}
        
        <span className="absolute top-6 right-6 bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow z-10">
          {lunette.genre.toUpperCase()}
        </span>
      </div>

      {/* Contenu */}
      <div className="p-5">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2 min-h-[5px]">
          {lunette.nom}
        </h3>
        
        <p className="text-2xl font-bold text-orange-500 mb-9">
          {lunette.prix}
        </p>

        <button
          onClick={() =>
            window.open(
              `https://wa.me/221767913986?text=Bonjour%20Peter%20Optique,%20je%20veux%20la%20*${encodeURIComponent(lunette.nom)}*%20(${lunette.prix})`,
              '_blank'
            )
          }
          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-2 rounded-2xl text-xl transition-all hover:scale-105 active:scale-95 shadow-lg"
        >
          Commander sur WhatsApp
        </button>
      </div>
    </div>
  );
}