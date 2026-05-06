import { Card } from '../components/Card';
import type { Lunette } from '../types/Lunette';

type CategoryPageProps = {
  categorie: string;
  lunettesData: Lunette[];
};

const CategoryPage: React.FC<CategoryPageProps> = ({ categorie, lunettesData }) => {
  const filtered = lunettesData.filter(l => l.categorie === categorie);

  const title = {
    soleil: "Lunettes de Soleil",
    photogrey: "Lunettes Photogrey",
    enfant: "Lunettes pour Enfant"
  }[categorie] || "Nos Lunettes";

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
        {title}
      </h1>

      {filtered.length === 0 ? (
        <p className="text-center text-2xl text-gray-500">Aucun modèle disponible pour le moment.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((lunette) => (
            <Card key={lunette.id} lunette={lunette} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CategoryPage;