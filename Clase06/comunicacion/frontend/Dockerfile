FROM node:alpine3.18

WORKDIR /app

RUN apk add --no-cache curl

COPY package.json .

RUN npm install

COPY . .

CMD npm start