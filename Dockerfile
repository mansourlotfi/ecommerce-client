FROM node:16.3.0-alpine AS builder
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


# Default port exposure
EXPOSE 80

# Copy .env file and shell script to container
COPY .env .

# Start Nginx server
CMD yarn start

