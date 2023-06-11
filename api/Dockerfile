# Utilisez une image Node.js
FROM node:14-alpine

# Répertoire de travail dans le conteneur
WORKDIR /app

# Copiez les fichiers du projet Nest.js dans le conteneur
COPY package.json  ./
COPY src ./src

# Installez les dépendances
RUN npm install

# Commande par défaut pour exécuter l'API Nest.js
CMD [ "npm", "run", "start:dev" ]