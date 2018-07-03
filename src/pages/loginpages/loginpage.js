
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AccessToken,
  //accessData,
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  TouchableOpacity,
  Toast
} from 'react-native';

import { Actions, Rauter, Scene } from 'react-native-router-flux';
import FBSDK from 'react-native-fbsdk'; // { LoginManager }

const {
  LoginManager,
  GraphRequest,
  GraphRequestManager
} = FBSDK;

export default class LoginPage extends Component {
  constructor() {
         super();
         this.state = {
             textValue: 'Control Log'
         };
     }

  ChangeTextFunction =() => {
           this.setState({
               textValue: 'Text change for log control'
           });
        console.log('Text change for log control');
       }
   responseInfoCallback = (error, result) => {
     if (error) {
       console.log(error);
       console.log(`Error fetching data: ${error.toString()}`);
     } else {
       console.log(result);
       console.log(`Success fetching data: ${result.toString()}`);
     }
   };

fbAuth = () => {
 LoginManager.logInWithReadPermissions(['email']).then((result) => {
    //(result) => asl�nda function(result){} �eklindeydi otomatik d�zeltti
    if (result.isCancelled) { //) { //e�er fb giri�i iptal edilirse
      console.log('Login was cancelled!');
      Actions.mainpage();
    } else {
        AccessToken.getCurrentAccessToken().then((data) => {
          const accessToken = data.accessToken;
          console.log(accessToken.toString());

          const infoRequest = new GraphRequest(
            '/me',
            {
              accessToken,
              parameters: {
                fields: {
                  string: 'email'
                }
              }
            },
             this.responseInfoCallback
        );
          // Start the graph request.
          new GraphRequestManager().addRequest(infoRequest).start();
        }).
        catch(error => {
         console.log('Failed', error);
           });
    }
  },
  (error) => {
    console.log(`Login failed with error: ${error}`);
  });
}
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.ChangeTextFunction} >
          <Text>Change Value</Text>
        </TouchableOpacity>

        <Text style={styles.instructions} >{this.state.textValue}</Text>

        <Text style={styles.welcome} >please login for continue</Text>
        <TouchableOpacity style={styles.button} onPress={this.fbAuth} >
          <Text>Login With Facebook</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
  alignItems: 'center',
  backgroundColor: '#DDDDDD',
  padding: 10
},
});

//AppRegistry.registerComponent('useNavFlux', () => useNavFlux);
