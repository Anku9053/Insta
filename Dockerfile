# Use the official Node.js image
FROM node:14

# Create and change to the app directory
WORKDIR /app

# Copy the app's source code to the container
COPY . .

# Install dependencies
RUN npm install

# Build the app
RUN npm run build

# Install serve to serve the app
RUN npm install -g serve

# Command to run the app
CMD ["serve", "-s", "build"]

# Expose the port the app runs on
EXPOSE 5000
