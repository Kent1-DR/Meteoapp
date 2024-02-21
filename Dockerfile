# Utilisation de l'image Node.js officielle en tant que base
FROM node:14

# Définir le répertoire de travail dans le conteneur
WORKDIR ./

# Copier les fichiers de l'application dans le conteneur
COPY . .

# Installer les dépendances de l'application
RUN npm install

# Commande pour démarrer l'application
expose 5500
CMD npm start



