FROM node:22-alpine

# Create directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

COPY . .

# Expose port
EXPOSE 3000:3000

# Run the server
CMD ["npm", "start"]

