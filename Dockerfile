
ARG NODE_VERSION=20
ARG PNPM_VERSION=8.14.3

FROM node:${NODE_VERSION}-alpine

RUN npm install -g pnpm@${PNPM_VERSION}

WORKDIR /app

COPY package*.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install

COPY . .


EXPOSE 3000

CMD pnpm dev
