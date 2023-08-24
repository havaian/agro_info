#!/bin/bash

# Delete previous build files
rm -rf /home/odya/projects/frontAdmin/build/*

# Run the build script
yarn build

# Copy build files to the server location
cp -r build/* /home/odya/projects/frontAdmin/build/