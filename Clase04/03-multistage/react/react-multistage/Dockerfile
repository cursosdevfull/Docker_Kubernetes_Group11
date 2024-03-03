FROM node:18.19.1-alpine as BUILD

WORKDIR /build

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=BUILD /build/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]