const express = require('express');
const proxy = require('http-proxy-middleware');
const path = require('path');
const port = process.env.NODE_PORT || 3003;
const app = express();
const { PROXY_HOST } = process.env;

const route = '/graphql';

app.disable('x-powered-by');

// serve static assets normally
app.use(express.static(path.resolve(__dirname, '../build')));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../build/index.html'));
});

if (PROXY_HOST) {
  app.use(route, proxy({ target: PROXY_HOST, changeOrigin: true }));
}

app.listen(port, () => {
  console.log(`server started on port ${port}`);
  if (PROXY_HOST) {
    console.log(`Proxying requests to ${route} to ${PROXY_HOST}`);
  } else {
    console.log('Not proxying any api requests, since no PROXY_HOST was defined.');
  }
});
