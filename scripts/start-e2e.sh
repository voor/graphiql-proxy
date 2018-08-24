#!/bin/sh

echo "Executing UI Tests..."
echo "Checking for Webdriver availability..."
wget -O/dev/null -q --no-proxy ${SELENIUM_ADDRESS}/status --retry-connrefused --tries=100 --waitretry=1
echo "Checking for target UI availability..."
wget -O/dev/null -q --no-proxy ${BASE_URL} --retry-connrefused --tries=100 --waitretry=1

set -e

echo "Making sure dependencies are present..."
npm install --quiet --no-color
echo "Beginning tests..."
npm run test:ui
