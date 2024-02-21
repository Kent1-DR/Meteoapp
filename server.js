const express = require('express');
const path = require('path');

const app = express();
const port = 8282;

// Définir le répertoire des fichiers statiques
app.use(express.static(path.join(__dirname, './')));

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
