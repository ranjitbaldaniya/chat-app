# Use Node.js as build environment for the client
FROM node:18-alpine as client-build

WORKDIR /app

COPY client/package*.json ./

RUN npm install

COPY client .

RUN npm run build

# Use Node.js as build environment for the server
FROM node:18-alpine as server-build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY server .

# Final image
FROM node:18-alpine

WORKDIR /app

COPY --from=client-build /app/client ./client
COPY --from=server-build /app/server ./

EXPOSE 5000


CMD ["npm", "run", "server"]
