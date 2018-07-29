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
import { LoginReducer} from '../../reducer/LoginReducer'
const mapStateToProps = (state) => ({
        loading: state.LoginReducer.loading,
        name: state.LoginReducer.data,

    }
)

class Signup extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: ''
        }
    }

    componentDidMount(){
        alert("daa")
    }

    componentWillReceiveProps(nextProps){

        alert(JSON.stringify(nextProps))

    }



    render() {
        return (
            <View
                style={{flex: 1,backgroundColor: '#A4D17E',
                    justifyContent: 'center',
                    alignItems: 'center'}}>
                <Text style={{margin: 50}}> {this.state.name}</Text>
            </View>
        )
    }
}


export default connect(mapStateToProps)(Signup);


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