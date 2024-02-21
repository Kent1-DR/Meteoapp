# Utilisation de l'image Node.js officielle en tant que base
FROM node:14

# Définir le répertoire de travail dans le conteneur
WORKDIR ./

# Copier les fichiers de l'application dans le conteneur
COPY package*.json ./

RUN npm install
COPY . .
# Commande pour démarrer l'application
expose 8081
CMD npm start



