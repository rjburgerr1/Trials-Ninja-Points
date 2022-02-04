FROM node

RUN apt-get update

# Create app directory

WORKDIR /usr/app


# Install node server dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

COPY package*.json ./

# Prepare for Production Build 

RUN export NODE_ENV=production
RUN npm install --only=production

# Bundle app source

COPY . .

# Start the node server
CMD  [ "npm", "run","start-prod"]