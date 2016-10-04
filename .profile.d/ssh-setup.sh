#!/bin/bash
echo $0: Fetching public/private keys...

# Create the .ssh directory
mkdir -p ${HOME}/.ssh
chmod 700 ${HOME}/.ssh

# Create the public/private key files from the environmental variables.
echo "${PUBLIC_KEY}" > ${HOME}/.ssh/id_rsa.pub
chmod 644 ${HOME}/.ssh/id_rsa.pub

echo "${PRIVATE_KEY}" > ${HOME}/.ssh/id_rsa
chmod 600 ${HOME}/.ssh/id_rsa

echo "${KNOWN_HOSTS}" > ${HOME}/.ssh/known_hosts


SSH_CMD="ssh -f -i ${HOME}/.ssh/id_rsa -N -L 1521:${REMOTE_SQL_HOST}:1521 ${TUNNEL_USER}@${TUNNEL_SITE}"

PID=`pgrep -f "${SSH_CMD}"`
if [ $PID ] ; then
    echo $0: There is already a tunnel running on ${PID}.
else
    echo $0: Launching a new tunnel...
    $SSH_CMD
fi
