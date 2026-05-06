import type { Lunette } from '../types/Lunette';

export function Card({ lunette }: { lunette: Lunette }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
      <div className="relative">
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-96 flex items-center justify-center">
          <span className="text-gray-400 text-6xl">🕶️</span>
        </div>
        {lunette.nouveau && (
          <span className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
            NOUVEAU
          </span>
        )}
        {lunette.promo && (
          <span className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
            PROMO
          </span>
        )}
        <span className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
          {lunette.genre.toUpperCase()}
        </span>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{lunette.nom}</h3>
        <p className="text-orange-600 font-semibold text-lg mb-4">À partir de {lunette.prix}</p>
        <button
          onClick={() =>
            window.open(
              `https://wa.me/221767913986?text=Bonjour, je veux la *${lunette.nom}* (${lunette.prix})`,
              '_blank'
            )
          }
          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-5 rounded-2xl text-xl transition transform hover:scale-105"
        >
          Commander sur WhatsApp
        </button>
      </div>
    </div>
  );
}