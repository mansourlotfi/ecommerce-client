FROM node:16.20.0-alpine3.18 AS builder
#Test
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install --production
# Copy app files
COPY . .
# Build the app
RUN yarn build


EXPOSE 80

COPY .env .

CMD yarn start

