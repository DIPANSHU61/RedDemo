/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//a@24geeks.com
    //123456789
import React, {Component} from 'react';

import {
    View,
    WebView,
    StyleSheet,
    ActivityIndicator,
    Text,
    TextInput,
    Dimensions,
    TouchableOpacity,
    NetInfo,
    Platform,
    Keyboard
} from 'react-native'

import {connect} from 'react-redux';
import  LoginReducer from '../../reducer/LoginReducer'
import {login} from "../../actions/Login";
import {Actions} from "react-native-router-flux";
const window = Dimensions.get('window');
const mapDispatchToProps= (dispatch)=>({
    login:(email,password)=>dispatch(login(email,password))


})
const mapStateToProps=(state)=>( {

     loading: state.LoginReducer.loading,
    data: state.LoginReducer.data
   // data:true

}

)

 class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }


     componentWillReceiveProps(nextProps){

        Actions.signup()

    }

    submit() {
        if (this.state.email === '')
            alert("Please enter email")
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email))
            alert("Invalid email")
        else if (this.state.password === '')
            alert("Please enter password")
        else {
            //Actions.drawer();
          //  this.props.loadingStarted();
            this.props.loading
            debugger;
            this.props.login(this.state.email, this.state.password);
        }
    }

    render() {
        var _this = this;
        return (
            <View style={styles.mainContainer}>
                <TextInput style={styles.inputStyle}
                           underlineColorAndroid="transparent"
                           placeholder="Email"
                           placeholderTextColor="grey"
                           keyboardType='email-address'
                           onChangeText={(email) => this.setState({email})}
                           returnKeyType={"next"}
                           onSubmitEditing={(event) => {
                               this.refs.password.focus();
                           }}
                           value={this.state.email}/>

                <TextInput style={styles.inputStyle}
                           ref='password'
                           underlineColorAndroid="transparent"
                           placeholder="Password"
                           placeholderTextColor="grey"
                           onChangeText={(password) => this.setState({password})}
                           value={this.state.password}/>

                <TouchableOpacity
                    disabled={this.props.loading}
                    style={styles.buttonStyle} onPress={() => this.submit()}>
                    {
                        (this.props.loading) ?
                            <ActivityIndicator size="large" color="#0000ff" animating={this.props.loading}/>
                            :
                            <Text style={{fontWeight: 'bold'}}>Login</Text>
                    }
                </TouchableOpacity>

            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);


const styles = StyleSheet.create({
        mainContainer: {
            flex: 1,
            backgroundColor: '#A4D17E',
            justifyContent: 'center',
            alignItems: 'center'
        },
        inputStyle: {
            margin: 10,
            height: 50,
            width: window.width - 100,
            borderColor: '#EC7063',
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 10,
            paddingRight: 10
        },
        textStyle: {
            fontSize: 22,
            color: 'black'
        },
        buttonStyle: {
            margin: 10,
            height: 40,
            backgroundColor: '#EC7063',
            borderColor: 'orange',
            borderRadius: 10,
            paddingLeft: 30,
            paddingRight: 30,
            justifyContent: 'center',
            alignItems: 'center'
        }

    }
);
