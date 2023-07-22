#!/bin/bash

# Build the image
docker build -t zfranke/apexwebrandomizer:arm .

# Push the image
docker push zfranke/apexwebrandomizer:arm

# Path: run.sh