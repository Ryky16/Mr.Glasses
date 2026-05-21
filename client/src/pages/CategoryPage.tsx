import { Card } from '../components/Card';
import type { Lunette } from '../types/Lunette';

type CategoryPageProps = {
  categorie: string;
  lunettesData: Lunette[];
};

const CategoryPage: React.FC<CategoryPageProps> = ({ categorie, lunettesData }) => {
  // Filtre selon la catégorie
  const filtered = lunettesData.filter(l => l.categorie === categorie);

  const title = {
    soleil: "Lunettes de Soleil",
    photogrey: "Lunettes Photogrey",
    enfant: "Lunettes pour Enfant"
  }[categorie] || "Nos Lunettes";

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto bg-white dark:bg-gray-950 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-black mb-4 text-gray-900 dark:text-white">
          {title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {filtered.length} modèles disponibles
        </p>
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-2xl text-gray-500 py-20">
          Aucun modèle disponible pour le moment.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {filtered.slice(0, 12).map((lunette) => (   // Limite à 12 cartes (3 lignes)
            <Card key={lunette.id} lunette={lunette} />
          ))}
        </div>
      )}

      {filtered.length > 12 && (
        <div className="text-center mt-16">
          <p className="text-gray-500 dark:text-gray-400">
            Et bien d'autres modèles disponibles sur demande via WhatsApp
          </p>
        </div>
      )}
    </section>
  );
};

export default CategoryPage;