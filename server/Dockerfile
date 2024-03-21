# Layer 1: Telling Docker to use the node:18-alpine image as the base image for the container.
FROM node:18-alpine

# Layer 2: Telling Docker to create a directory called `app` in the container and set it as the working directory.
WORKDIR /app

# Layer 3: Copying the package.json file from the root directory to the `app` directory in the container.
COPY ./package*.json .

# Layer 4: Installing the dependencies listed in the package.json file.
RUN npm install

# Layer 5: Copying all the files from the server directory to the `app` directory in the container.
COPY . .

# Layer 6: Telling Docker that the container will listen on port 5000.
EXPOSE 5000

# Layer 7: Telling Docker to run the `npm run server` command when the container is started.
CMD ["npm", "run", "server"]
