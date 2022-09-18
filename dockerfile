FROM node:latest
WORKDIR /app
COPY package.json /app

RUN npm install
COPY . /app
EXPOSE 3030
CMD ["nodemon", "public/app.js"]

# Language: dockerfile
# Path: dockerfile