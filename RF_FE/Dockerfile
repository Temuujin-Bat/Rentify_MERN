# Use official Node.js image with specified version as base
FROM node:20

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install

# Copy all source code to the working directory
COPY . .

# Build your application (adjust the build command based on your setup)
RUN npm run build

# Expose the port your app runs on
EXPOSE 5173

# Command to run your app using serve
CMD ["npm", "run", "dev"]
