# Utilisation de l'image Node.js officielle en tant que base
FROM node:14

# Définir le répertoire de travail dans le conteneur
WORKDIR ./app

# Copier les fichiers de l'application dans le conteneur
COPY package*.json ./

RUN npm install
COPY . .
# Commande pour démarrer l'application
EXPOSE 8282
CMD npm start



