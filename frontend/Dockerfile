FROM node:24-slim

ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0

WORKDIR /app

RUN corepack enable

COPY package.json yarn.lock .yarnrc.yml ./

RUN yarn install --immutable

COPY . .

EXPOSE 5173

CMD ["yarn", "dev", "--host", "0.0.0.0"]