FROM node

RUN apt-get update

RUN   echo pwd
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

# Expose port 3002 (the port the node server listens on, keeps things simeple) 
# for host machine that the docker image will run on

EXPOSE 3002

# Update and Initialize Prisma Client



RUN npx prisma db pull
RUN npx prisma generate

# Start the node server


#CMD node server.js