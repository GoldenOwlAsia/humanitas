import React, { Component } from 'react'
import { View, Text, AsyncStorage, TouchableOpacity, Dimensions, Image } from 'react-native';
import { connect } from 'react-redux'
import { loginSuccess } from '../../actions/Authenticate';
import Spinner from 'react-native-loading-spinner-overlay';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


export default class Home extends Component {

  static navigationOptions  = ({navigation}) => ({
    tabBarLabel: 'Home',
    header: null,
    tabBarIcon: ({ tintColor }) => (
      <Image source={require('../../images/home.png')} 
        style={[{ width: 24, height: 24}, { tintColor }]} />
    ),
  })

  render() {
    return (
      <View 
        style={{ flex: 1 }}
      />
    );
  }
}
