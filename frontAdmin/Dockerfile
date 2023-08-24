# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package.json yarn.lock ./app

# Install dependencies
RUN yarn install

# Copy everything to app directory
COPY . /app

# Copy the entrypoint script to the container
COPY entrypoint.sh ./app

# Set execute permissions for the entrypoint script
RUN chmod +x entrypoint.sh

# Start the build process using the entrypoint script
CMD ["./entrypoint.sh"]
