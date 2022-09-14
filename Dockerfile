FROM node:lts-alpine AS base
COPY package.json yarn.* tsconfig.json ./
WORKDIR $HOME/$APP_NAME
COPY . $HOME/$APP_NAME
RUN yarn 


FROM base as production
ENV NODE_PATH=./build
RUN yarn build