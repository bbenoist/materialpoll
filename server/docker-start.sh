#!/usr/bin/env bash

set -e

if [ -z "$MONGO_URL" ]; then
  echo "ERROR: Please set the MONGO_URL environment variable."
  exit 1
fi

echo "module.exports = { db: '$MONGO_URL' }" > config.js

node server.js
