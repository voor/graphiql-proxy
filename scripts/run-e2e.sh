#!/bin/bash

set -Ee

function _finally {
    docker-compose stop && docker-compose rm -f
}

trap _finally EXIT

if [ -z "$CI" ]; then
    docker-compose build
fi

which docker-compose

docker-compose rm -f && \
    docker-compose up --timeout 1 --no-build -d && \
    docker-compose run tests ./scripts/start-e2e.sh
