FROM node:16.17.0-alpine AS build

WORKDIR /app

COPY . .

RUN npm install

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

RUN addgroup -S app && adduser -S -G app app

USER app

EXPOSE 3000

CMD ["npm", "start"]