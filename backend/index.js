const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Pour accéder aux fichiers

// Configuration Multer (sauvegarde des fichiers)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 } // 10 Mo max
});

// Route principale pour recevoir l'ordonnance
app.post('/api/ordonnance', upload.single('ordonnance'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "Aucun fichier reçu" });
    }

    const { prenom, telephone } = req.body;
    const fileUrl = `http://localhost:5000/uploads/${req.file.filename}`;

    const message = `🟢 *NOUVELLE ORDONNANCE REÇUE* 🟢\n\n` +
      `👤 Nom : *${prenom}*\n` +
      `📞 Téléphone : *${telephone}*\n` +
      `📎 Fichier : ${req.file.originalname}\n` +
      `🔗 Lien direct : ${fileUrl}`;

    console.log("\n=== NOUVELLE ORDONNANCE ===");
    console.log(message);

    res.json({ 
      success: true, 
      message: "Ordonnance reçue avec succès",
      fileUrl 
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Erreur serveur" });
  }
});

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Serveur backend démarré sur http://localhost:${PORT}`);
});