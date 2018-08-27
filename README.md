# Simple GraphIQL Proxy

[![Code Coverage](https://gitlab.com/rcvanvo/graphiql-proxy/badges/master/coverage.svg?job=test)](https://rcvanvo.gitlab.io/graphiql-proxy/lcov-report/)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Quick Start

If you don't need to make any modifications to the UI, you can just run this:

```
npm install && npm run build && npm run start:faker
```

This will run a Create React App production optimized build and then start a backend Express server that will host the assets and proxy `/graphql` to whatever is defined as `${PROXY_HOST}` from the environment.  Hard-coded into the `package.json` right now is just https://api.graph.cool/simple/v1/swapi but you can change that to whatever endpoint you want.

## Deploying to a static bucket

If you want to host this in a bucket with no backend, you'll need to do 1 of two things:

* Have a CORS enabled endpoint and change the fetch route:
  ```diff
  function graphQLFetcher(graphQLParams) {
  -  return fetch(window.location.origin + '/graphql', {
  +  return fetch(`${ACTUAL_ROUTE}`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(graphQLParams),
    }).then(response => response.json());
  }
  ```

* Have a self-referential route and again, modify the file if it's not just located at `/graphql`
  ```diff
  function graphQLFetcher(graphQLParams) {
  -  return fetch(window.location.origin + '/graphql', {
  +  return fetch(window.location.origin + `${ACTUAL_PATH}`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(graphQLParams),
    }).then(response => response.json());
  }
  ```