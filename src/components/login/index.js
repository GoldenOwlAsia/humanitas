import React, { Component } from 'react'
import { View, Text, AsyncStorage, TouchableOpacity, Dimensions, Image } from 'react-native';
import { connect } from 'react-redux'
import { loginSuccess } from '../../actions/Authenticate';
import Spinner from 'react-native-loading-spinner-overlay';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

class Login extends Component {
    
    static navigationOptions = ({navigation}) => ({
        header: null,
    })
    constructor (props) {
        super(props);
        this.state = {
          visible: false,
        };
    }

    componentWillMount() {
    }

    onPressLogin = () => {
      this.props.loginSuccess({ user: 'John', id: '123' });
    }

    renderLoginBtn() { 
      return (
        <TouchableOpacity
          style={{ backgroundColor: 'blue', height: 40, width: width - 150, justifyContent: 'center', alignItems: 'center' }}
          onPress={this.onPressLogin}
        >
          <Text
            style={{ color: 'white', fontSize: 16 }}
          >Login</Text>
        </TouchableOpacity>
      )
    }

    render () {
        return (
            <View style={{ width, height, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }} >
              {this.renderLoginBtn()}
            </View>
        );
    }
}   

export default connect(state => ({
    logged: state.authentication.loggedIn,
    user: state.authentication.user
}), { loginSuccess })(Login);