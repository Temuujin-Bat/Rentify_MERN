# Use Node.js as base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining source code to container
COPY . .

# Expose port
EXPOSE 1010

# Command to run the server
CMD ["node", "server.js"]
