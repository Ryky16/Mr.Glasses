export interface Lunette {
  id: number;
  nom: string;
  prix: string;
  categorie: string;
  genre: string;
  image: string;
  nouveau?: boolean;
  promo?: boolean;
}