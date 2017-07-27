#!/usr/bin/env bash

echo "module.exports = { db: '$MONGO_URL' }" > config.js

node server.js
