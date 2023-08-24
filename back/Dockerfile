# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory within the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package.json yarn.lock ./

# Install app dependencies using Yarn
RUN yarn install

# Copy the rest of the application code to the container
COPY . ./

# Expose the port your application will run on
EXPOSE 1234

# Run entrypoint bash file
ENTRYPOINT ["/app/entrypoint.sh"]
