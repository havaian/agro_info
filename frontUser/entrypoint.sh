#!/bin/bash

# Delete previous build files
rm -rf /home/odya/projects/frontUser/build/*

# Run the build script
npm run build

# Copy build files to the server location
cp -r build/* /home/odya/projects/frontUser/build/
