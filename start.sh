#!/bin/sh

# Update application
git pull
npm install

chmod 775 -R /app/

# Setup user
PUID=${PUID:-123}
PGID=${PGID:-123}

if [ ! "$(id -u arma)" -eq "$PUID" ]; then usermod -o -u "$PUID" arma ; fi
if [ ! "$(id -g arma)" -eq "$PGID" ]; then groupmod -o -g "$PGID" arma ; fi

cd $GAME_PATH
su -c 'node /app/app.js' -s /bin/sh arma
