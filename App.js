import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import Router from './src/Router';
import {store} from './src/store';

export default class App extends React.Component {
  render() {
    return (
      //redux store
      //react native router flux routing
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
