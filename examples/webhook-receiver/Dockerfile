FROM node:18-alpine
WORKDIR /usr/src/app
COPY package.json package.json
RUN npm ci --only=production
COPY index.js index.js
EXPOSE 3000
CMD ["node", "index.js"]
