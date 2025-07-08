FROM node:20-alpine

WORKDIR /app

COPY server/package*.json ./
RUN npm install

COPY server ./
RUN npm run build

EXPOSE 3000

CMD ["node", "server.js"]
