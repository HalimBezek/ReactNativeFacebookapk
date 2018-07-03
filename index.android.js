/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import Start from './src/index';


export default class useNavFlux extends Component {
  render() {
    return (
     <Start />
    );
  }
}

AppRegistry.registerComponent('myreactAp', () => useNavFlux);
