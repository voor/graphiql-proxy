import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Playground, store } from 'graphql-playground-react';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Playground endpoint="/graphql" />
      </Provider>
    );
  }
}

export default App;
