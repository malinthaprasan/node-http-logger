# Use lightweight Node.js image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json (if present, though not required for this minimal setup)
COPY package.json package-lock.json ./

# Copy server file
COPY server.js .

# Expose port 3000
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]
