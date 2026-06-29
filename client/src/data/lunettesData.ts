import type { Lunette } from '../types/Lunette';

export const lunettesData: Lunette[] = [
  // ==================== LUNETTES DE SOLEIL (12 modèles) ====================
  { id: 1, nom: "Lunette Ray-Ban", prix: "8 000 FCFA", categorie: "soleil", genre: "homme", nouveau: true, image: "soleil/raynor.JPG" },
  { id: 2, nom: "Lunette Dior", prix: "8 000 FCFA", categorie: "soleil", genre: "femme", promo: true, image: "soleil/fdior.JPG" },
  { id: 3, nom: "Lunette Moscot", prix: "8 000 FCFA", categorie: "soleil", genre: "homme", promo: true, image: "soleil/redmosc.JPG" },
  { id: 4, nom: "Lunette Versace", prix: "8 000 FCFA", categorie: "soleil", genre: "femme", nouveau: true, image: "soleil/versafil.JPG" },
  { id: 5, nom: "Lunette de Soleil", prix: "8 000 FCFA", categorie: "soleil", genre: "mixte", nouveau: true, image: "soleil/solnoir.jpeg" },
  { id: 6, nom: "Lunette Prada", prix: "8 000 FCFA", categorie: "soleil", genre: "homme", nouveau: true, image: "soleil/marprada.JPG" },
  { id: 7, nom: "Lunette Fendi", prix: "8 000 FCFA", categorie: "soleil", genre: "femme", nouveau: true, image: "soleil/fendiso.JPG" },
  { id: 8, nom: "Lunette Gucci", prix: "8 000 FCFA", categorie: "soleil", genre: "homme", promo: true, image: "soleil/bleuguci.JPG" },
  { id: 9, nom: "Lunette de Soleil", prix: "8 000 FCFA", categorie: "soleil", genre: "homme", nouveau: true,  image: "soleil/blanmar.JPG" },
  { id: 10, nom: "Lunette Moscot", prix: "8 000 FCFA", categorie: "soleil", genre: "mixte", promo: true, image: "soleil/mosbanc.JPG" },
  { id: 11, nom: "Lunette Prada", prix: "8 000 FCFA", categorie: "soleil", genre: "mixte", promo: true, image: "soleil/Pramar.JPG" },
  { id: 12, nom: "Lunette Louis Vuitton", prix: "8 000 FCFA", categorie: "soleil", genre: "homme", nouveau: true, image: "soleil/louivert.JPG" },

  // ==================== LUNETTES PHOTOGREY (12 modèles) ====================
  { id: 13, nom: "Lunette Yilina ", prix: "10 000 FCFA", categorie: "photogrey", genre: "femme", nouveau: true, image: "photogrey/yilinarose.JPG" },
  { id: 14, nom: "Lunette Maybach", prix: "10 000 FCFA", categorie: "photogrey", genre: "homme", promo: true, image: "photogrey/maybagri.JPG" },
  { id: 15, nom: "Lunette Prada", prix: "10 000 FCFA", categorie: "photogrey", genre: "femme", nouveau: true, image: "photogrey/pradablanc.JPG" },
  { id: 16, nom: "Lunette Dita", prix: "10 000 FCFA", categorie: "photogrey", genre: "mixte", promo: true, image: "photogrey/photobleu.jpeg" },
  { id: 17, nom: "Lunette Burberry", prix: "10 000 FCFA", categorie: "photogrey", genre: "femme", promo: true, image: "photogrey/Buberynoi.JPG" },
  { id: 18, nom: "Lunette Prada", prix: "10 000 FCFA", categorie: "photogrey", genre: "homme", nouveau: true, image: "photogrey/paranoi.JPG" },
  { id: 19, nom: "Lunette Chanel", prix: "10 000 FCFA", categorie: "photogrey", genre: "femme", nouveau: true, image: "photogrey/chaviolet.JPG" },
  { id: 20, nom: "Lunette Moscot", prix: "10 000 FCFA", categorie: "photogrey", genre: "homme", nouveau: true, image: "photogrey/mosmaro.JPG" },
    { id: 21, nom: "lunette Miu Miu", prix: "10 000 FCFA", categorie: "photogrey", genre: "femme", promo: true, image: "photogrey/miunoi.JPG" },
  { id: 22, nom: "Lunette Cartier", prix: "10 000 FCFA", categorie: "photogrey", genre: "homme", promo: true, image: "photogrey/cartmar.JPG" },
  { id: 23, nom: "Lunette Dior", prix: "10 000 FCFA", categorie: "photogrey", genre: "femme", nouveau: true, image: "photogrey/dioros.JPG" },
  { id: 24, nom: "Lunette Hugo Boss", prix: "10 000 FCFA", categorie: "photogrey", genre: "homme", promo: true, image: "photogrey/hugobosbleu.JPG" },

  // ==================== LUNETTES ENFANT (12 modèles) ====================
  { id: 25, nom: "Mickey Adventure", prix: "28 000 FCFA", categorie: "enfant", genre: "enfant", image: "enfant/moscbleu.jpeg" },
  { id: 26, nom: "Frozen Princess", prix: "29 000 FCFA", categorie: "enfant", genre: "enfant", image: "maybhsim.jpeg" },
  { id: 27, nom: "Spider-Man Hero", prix: "27 000 FCFA", categorie: "enfant", genre: "enfant", image: "maybhsim.jpeg" },
  { id: 28, nom: "Cars Lightning", prix: "28 000 FCFA", categorie: "enfant", genre: "enfant", image: "maybhsim.jpeg" },
  { id: 29, nom: "Paw Patrol Chase", prix: "26 000 FCFA", categorie: "enfant", genre: "enfant", image: "maybhsim.jpeg" },
  { id: 30, nom: "Unicorn Dream", prix: "30 000 FCFA", categorie: "enfant", genre: "enfant", image: "maybhsim.jpeg" },
  { id: 31, nom: "Super Mario", prix: "29 000 FCFA", categorie: "enfant", genre: "enfant", image: "maybhsim.jpeg" },
  { id: 32, nom: "Minions Fun", prix: "27 000 FCFA", categorie: "enfant", genre: "enfant", image: "maybhsim.jpeg" },
  { id: 33, nom: "Lion King", prix: "28 000 FCFA", categorie: "enfant", genre: "enfant", image: "maybhsim.jpeg" },
  { id: 34, nom: "Avengers Junior", prix: "31 000 FCFA", categorie: "enfant", genre: "enfant", image: "maybhsim.jpeg" },
  { id: 35, nom: "Princess Elsa", prix: "29 000 FCFA", categorie: "enfant", genre: "enfant", image: "maybhsim.jpeg" },
  { id: 36, nom: "Batman Hero", prix: "30 000 FCFA", categorie: "enfant", genre: "enfant", image: "maybhsim.jpeg" },
];