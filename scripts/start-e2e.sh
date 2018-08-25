#!/bin/sh

echo "Executing UI Tests..."
echo -n "Checking for Webdriver availability ..."
wget -O/dev/null -q --no-proxy ${SELENIUM_ADDRESS}/status --retry-connrefused --tries=100 --waitretry=1 >/dev/null 2>&1
echo " done"
echo -n "Checking for target UI availability ..."
wget -O/dev/null -q --no-proxy ${BASE_URL} --retry-connrefused --tries=100 --waitretry=1 >/dev/null 2>&1
echo " done"

set -e

echo -n "Making sure dependencies are present ..."
npm install --quiet --no-color >/dev/null 2>&1
echo " done"
echo "Beginning tests..."
npm run test:ui
