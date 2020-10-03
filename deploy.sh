#!/bin/bash -e

if [ -z "$1" ]; then
  printf "Usage $0 server_url\n"
  exit 1
fi

server_url=$1

export REACT_APP_API_URL=${server_url}

npm install

npm run build

printf "Stopping process running on port 5000 if exists\n"
sudo fuser -k 5000/tcp

printf "Running the application\n"
npx serve -s -n build

printf "Exit"
