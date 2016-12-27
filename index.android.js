import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { App } from './src/app/component';

export default class savvy_cart extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('savvy_cart', () => savvy_cart);
