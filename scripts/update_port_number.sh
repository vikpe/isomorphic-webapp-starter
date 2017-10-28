#!/usr/bin/env bash
sed -i "s/___EXPRESS_PORT_NUMBER___/$1/g" dist/server.min.js
