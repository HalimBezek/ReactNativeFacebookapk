/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LoginPage from './pages/loginpages/loginpage';
import MainPage from './pages/mainpages/mainpage';


const Index = Actions.create(

           <Scene>
           <Scene
           key="loginpage"
           component={LoginPage}
           title='Login Page'
           initial
           />
           <Scene
           key="mainpage"
           component={MainPage}
           title='Main Page'
           />
         </Scene>
    );

export default Index;
//AppRegistry.registerComponent('Index', () => Index);
