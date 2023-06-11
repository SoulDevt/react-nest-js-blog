# Utilisez une image Node.js
FROM node:14-alpine

# Répertoire de travail dans le conteneur
WORKDIR /app

# Copiez les fichiers du projet React dans le conteneur
COPY package.json ./
COPY public ./public
COPY src ./src

# Installez les dépendances
RUN npm install

# # Construisez l'application React
# RUN yarn build

# Commande par défaut pour exécuter le serveur de développement
CMD ["npm", "start"]