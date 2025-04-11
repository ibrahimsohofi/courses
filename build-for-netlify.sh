#!/bin/bash

# Build the Next.js project for static export
bun run build

# Navigate to the out directory
cd out

# Create the zip file for deployment
zip -rFS ../output.zip .

echo "Build completed and zip created at output.zip"
