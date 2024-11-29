FROM node:20-alpine

WORKDIR /app

RUN npm install

COPY . ./

RUN npm run build