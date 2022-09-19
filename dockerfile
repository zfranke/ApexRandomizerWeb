FROM node:latest
# Create app directory
WORKDIR /app
#Install the dependencies
COPY package.json ./

#Make sure its all installed and ready to go
RUN npm install
COPY . /app

#Get it?
EXPOSE 3030
# Light it up
CMD ["npm", "start"]