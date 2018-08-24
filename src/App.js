import React, { Component } from 'react';
import 'graphiql/graphiql.css';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';

function graphQLFetcher(graphQLParams) {
  return fetch(window.location.origin + '/graphql', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

class App extends Component {
  render() {
    return (
      <GraphiQL fetcher={graphQLFetcher} />
    );
  }
}

export default App;
