#!/bin/bash

# Clean up any previous builds
rm -rf .next out

# Install dependencies if needed
# bun install

# Build the Next.js project for static export
bun run build

# Ensure CSS files are copied correctly
# Create a simple CSS check file to verify styling
echo '<style>.css-check{color:blue;}</style><div class="css-check">CSS Test</div>' > out/css-check.html

# Navigate to the out directory
cd out

# Create the zip file for deployment
zip -rFS ../output.zip .

echo "Build completed and zip created at output.zip"
