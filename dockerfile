# Use an ARM-compatible base image, such as Alpine Linux for ARM
FROM arm32v7/alpine:latest

# Install necessary dependencies and tools
RUN apk add --no-cache nodejs npm

# Create app directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy application code
COPY . /app

# Expose the desired port
EXPOSE 3030

# Start the application
CMD ["npm", "start"]
