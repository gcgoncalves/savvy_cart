import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';

import Product from '../product/container';
import reducers from './reducers';

const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__});

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      loggerMiddleware
    ),
  );
  
  return createStore(reducers, initialState, enhancer);
}

const store = configureStore({});

export class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Product />
      </Provider>
    );
  }
}

