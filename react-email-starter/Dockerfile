FROM node:20 

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ENV PORT 8081
EXPOSE $PORT

CMD ["npm", "start"]
