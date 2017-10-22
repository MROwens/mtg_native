import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import Router from './src/Router';

export default class App extends React.Component {
  render() {
    return (
      //redux store
      //react native router flux routing
      <Provider store={createStore(reducers)}>
        <Router />
      </Provider>
    );
  }
}
