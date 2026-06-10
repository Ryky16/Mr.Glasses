import { useState } from 'react';
import { User, Smartphone, Palette} from 'lucide-react';

export function LentillesPage() {
  const [prenom, setPrenom] = useState('');
  const [telephone, setTelephone] = useState('');
  const [couleur, setCouleur] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const sendToWhatsApp = () => {
    if (!prenom.trim() || !telephone.trim() || !couleur) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    setIsSending(true);
    setError('');

    const message = `🔄 *DEMANDE DE CHANGEMENT DE LENTILLES* 🔄\n\n` +
      `👤 Nom : *${prenom}*\n` +
      `📞 Téléphone : *${telephone}*\n` +
      `🎨 Couleur souhaitée : *${couleur}*\n\n` +
      `Je souhaite changer les lentilles de mes lunettes.`;

    window.open(`https://wa.me/221767913986?text=${encodeURIComponent(message)}`, '_blank');

    setSent(true);
    setIsSending(false);

    setTimeout(() => {
      setPrenom('');
      setTelephone('');
      setCouleur('');
      setSent(false);
      setError('');
    }, 5000);
  };

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto bg-white dark:bg-gray-950 min-h-screen">
      <div className="text-center mb-14">
        <Palette className="w-20 h-20 mx-auto text-purple-500 mb-6" />
        <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-600 to-violet-500 bg-clip-text text-transparent mb-4">
          Changer de Lentilles
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">Choisissez la couleur de vos nouvelles lentilles</p>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 dark:border-gray-800">
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-3 text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">
                <User className="w-6 h-6 text-purple-600" />
                Votre prénom
              </label>
              <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} placeholder="Ex: Fatou Diop" className="w-full px-6 py-4 border border-gray-300 dark:border-gray-700 rounded-2xl focus:border-purple-500 dark:bg-gray-800 dark:text-white" />
            </div>
            <div>
              <label className="flex items-center gap-3 text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">
                <Smartphone className="w-6 h-6 text-purple-600" />
                Votre numéro WhatsApp
              </label>
              <input type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} placeholder="77 123 45 67" className="w-full px-6 py-4 border border-gray-300 dark:border-gray-700 rounded-2xl focus:border-purple-500 dark:bg-gray-800 dark:text-white" />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-3 text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">
              <Palette className="w-6 h-6 text-purple-600" />
              Couleur de lentilles souhaitée
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setCouleur('Vert')}
                className={`p-6 rounded-2xl border-2 transition-all ${couleur === 'Vert' ? 'border-green-500 bg-green-50 dark:bg-green-950' : 'border-gray-300 dark:border-gray-700 hover:border-green-300'}`}
              >
                Vert
              </button>
              <button
                onClick={() => setCouleur('Bleu')}
                className={`p-6 rounded-2xl border-2 transition-all ${couleur === 'Bleu' ? 'border-blue-500 bg-blue-50 dark:bg-blue-950' : 'border-gray-300 dark:border-gray-700 hover:border-blue-300'}`}
              >
                Bleu
              </button>
            </div>
            {error && <p className="text-red-500 text-center mt-3 font-medium">{error}</p>}
          </div>

          <button
            onClick={sendToWhatsApp}
            disabled={isSending || sent || !prenom.trim() || !telephone.trim() || !couleur}
            className="w-full py-7 rounded-3xl font-bold text-2xl bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:brightness-110 transition disabled:opacity-50"
          >
            {sent ? "✅ Demande envoyée avec succès !" : isSending ? "Ouverture de WhatsApp..." : "Envoyer la demande sur WhatsApp"}
          </button>
        </div>
      </div>
    </section>
  );
}