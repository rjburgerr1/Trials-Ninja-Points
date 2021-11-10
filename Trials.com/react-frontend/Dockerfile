# # Stage 1 as build-stage
# FROM node:13.12.0-alpine as build

# WORKDIR /react-frontend
# COPY package.json .
# RUN npm install
# COPY . .

# ARG REACT_APP_AXIOS_BASE_URL
# ENV REACT_APP_AXIOS_BASE_URL=$REACT_APP_AXIOS_BASE_URL

# RUN npm run build

# #Stage 2
# FROM nginx:1.17.0-alpine

# COPY --from=build-stage /react-frontend/build /usr/share/nginx/html
# EXPOSE $REACT_DOCKER_PORT

# CMD nginx -g 'daemon off;'


FROM node:16-alpine
WORKDIR /app
RUN export NODE_OPTIONS=--openssl-legacy-provider
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm", "run", "start-compose"]









# FROM node:15-alpine as builder

# # install and cache app dependencies
# COPY package.json package-lock.json ./
# RUN npm install && mkdir /react-frontend && mv ./node_modules ./react-frontend

# WORKDIR /react-frontend

# COPY . .

# RUN npm run build



# # ------------------------------------------------------
# # Production Build
# # ------------------------------------------------------
# FROM nginx:stable-alpine
# RUN apk add npm
# COPY --from=builder /react-frontend/build /usr/share/nginx/html
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx.conf /etc/nginx/conf.d
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]



