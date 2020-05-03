#!/bin/bash -e

if [ -z "$1" ] || [ -z "$2" ] || [ -z "$3" ] || [ -z "$4" ]; then
  printf "Usage $0 bastion_address instance_address private_key server_url\n"
  exit 1
fi

bastion_address=$1
instance_address=$2
private_key=$3
server_url=$4

export REACT_APP_API_URL=${server_url}
npm run build

printf "\n"
printf "Adding key to keychain\n"
ssh-add -k "${private_key}"
printf "Creating working directory on Bastion Host\n"
ssh -A ec2-user@"${bastion_address}" "mkdir -p ~/workdir/usermanager"
printf "Copying project files to Bastion Host\n"
rsync -av -e ssh --exclude='node_modules' ./ ec2-user@"${bastion_address}":~/workdir/usermanager
printf "Creating working directory on private instance\n"
ssh -A ec2-user@"${bastion_address}" "ssh ec2-user@${instance_address} 'mkdir -p ~/workdir/usermanager'"
printf "Copying project files to private instance\n"
ssh -A ec2-user@"${bastion_address}" "scp -r ~/workdir/usermanager/ ec2-user@${instance_address}:~/workdir"
printf "Stopping process running on port 5000 if exists\n"
ssh -A ec2-user@"${bastion_address}" "ssh ec2-user@${instance_address} 'sudo fuser -k 5000/tcp'"
printf "Running the application\n"
ssh -A ec2-user@"${bastion_address}" "ssh ec2-user@${instance_address} 'cd ~/workdir/usermanager && npx serve -s -n build'"
printf "Exit"
