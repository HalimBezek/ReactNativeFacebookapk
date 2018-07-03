/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { DatePickerDialog } from 'react-native-datepicker-dialog';
import moment from 'moment';

export default class MainPage extends Component {
  constructor(props) {
  super(props);
  this.state = {
    dobText: '',
    dobDate: null,
    journeyText: '',
    journeyDate: null,
  };
}
/**
   * Journey date textbox click listener
   */
  onJourneyDatePress = () => {
    let journeyDate = this.state.journeyDate;

    if (!journeyDate || journeyDate == null) {
      journeyDate = new Date();
      this.setState({
        journeyDate //: journeyDate
      });
    }

    //To open the dialog
    this.refs.journeyDialog.open({
      date: journeyDate,
      minDate: new Date() //To restirct past date
    });
  }
  /**
   * Call back for journey date picked event
   *
   */
  onJourneyDatePicked = (date) => {
    this.setState({
      journeyDate: date,
      journeyText: moment(date).format('DD MMM, YYYY')
    });
  }
    //not : adı ve soyad bilgilerini fbsdk Graph Api kullanımından alacak
  render() {
    return (
      <View style={styles.container}>

      <Text style={styles.welcome}> Welcome +" " </Text>
        <TouchableOpacity onPress={this.onJourneyDatePress.bind(this)} >
          <View style={styles.datePickerBox}>
            <Text style={styles.datePickerText}>{this.state.journeyText}</Text>
          </View>
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
});
