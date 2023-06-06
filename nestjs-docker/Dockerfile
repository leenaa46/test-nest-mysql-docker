FROM node:alpine

WORKDIR usr/app

COPY package*.json .

RUN npm install pnpm --global

RUN pnpm install

COPY . .

RUN pnpm run build

CMD ["pnpm", "run", "start:prod"]