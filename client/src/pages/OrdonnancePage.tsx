import { useState } from 'react';
import { Upload, User, Smartphone, Camera, Image as ImageIcon, FileText } from 'lucide-react';

export function OrdonnancePage() {
  const [prenom, setPrenom] = useState('');
  const [telephone, setTelephone] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      if (selectedFile.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => setPreview(reader.result as string);
        reader.readAsDataURL(selectedFile);
      } else {
        setPreview(null);
      }
    }
  };

  const sendToWhatsApp = () => {
    if (!file || !prenom.trim() || !telephone.trim()) {
      alert("Veuillez remplir tous les champs et sélectionner un fichier.");
      return;
    }

    setIsSending(true);

    const reader = new FileReader();
    reader.onloadend = () => {
      const message = `🟢 NOUVELLE ORDONNANCE REÇUE !\n\n👤 Nom : *${prenom}*\n📞 Téléphone : *${telephone}*\n📎 Fichier : ${file.name}`;

      window.open(
        `https://wa.me/221767913986?text=${encodeURIComponent(message)}`,
        '_blank'
      );

      setSent(true);
      setIsSending(false);

      // Reset du formulaire
      setTimeout(() => {
        setPrenom('');
        setTelephone('');
        setFile(null);
        setPreview(null);
        setSent(false);
      }, 5000);
    };

    reader.readAsDataURL(file);
  };

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-14">
        <Upload className="w-20 h-20 mx-auto text-teal-500 mb-6" />
        <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent mb-4">
          Déposez votre ordonnance
        </h1>
        <p className="text-xl text-gray-600">Nous vous répondrons en moins de 10 minutes</p>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="space-y-8">
          {/* Prénom */}
          <div>
            <label className="flex items-center gap-3 text-lg font-semibold mb-3 text-gray-700">
              <User className="w-6 h-6 text-teal-600" />
              Votre prénom
            </label>
            <input
              type="text"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              placeholder="Ex: Fatou Diop"
              className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none text-lg"
            />
          </div>

          {/* Téléphone */}
          <div>
            <label className="flex items-center gap-3 text-lg font-semibold mb-3 text-gray-700">
              <Smartphone className="w-6 h-6 text-teal-600" />
              Votre numéro WhatsApp
            </label>
            <input
              type="tel"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              placeholder="77 123 45 67"
              className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none text-lg"
            />
          </div>

          {/* Fichier */}
          <div>
            <label className="flex items-center gap-3 text-lg font-semibold mb-3 text-gray-700">
              <Camera className="w-6 h-6 text-teal-600" />
              Photo ou PDF de l'ordonnance
            </label>

            <div className="border-4 border-dashed border-gray-300 rounded-3xl p-12 text-center hover:border-teal-400 transition">
              <input
                type="file"
                accept="image/*,application/pdf"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer block">
                {preview ? (
                  <img src={preview} alt="preview" className="mx-auto max-h-80 rounded-2xl" />
                ) : file ? (
                  <div className="flex flex-col items-center">
                    <FileText className="w-20 h-20 text-blue-500 mx-auto" />
                    <p className="mt-4 font-medium">{file.name}</p>
                  </div>
                ) : (
                  <div>
                    <ImageIcon className="w-20 h-20 mx-auto text-gray-400" />
                    <p className="mt-4 text-lg">Cliquez pour sélectionner un fichier</p>
                  </div>
                )}
              </label>
            </div>
          </div>

          <button
            onClick={sendToWhatsApp}
            disabled={isSending || sent || !file || !prenom || !telephone}
            className="w-full py-6 rounded-3xl font-bold text-2xl bg-gradient-to-r from-teal-500 to-cyan-600 text-white hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {sent ? "✅ Envoyé avec succès !" : isSending ? "Envoi en cours..." : "Envoyer sur WhatsApp"}
          </button>
        </div>
      </div>
    </section>
  );
}