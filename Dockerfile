FROM node:14
WORKDIR /usr/src/app

ENV PORT=8080

EXPOSE 8080

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

CMD ["yarn", "prod"]
