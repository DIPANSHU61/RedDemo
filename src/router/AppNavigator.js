import React, { Component } from 'react';
import {Router, Scene, Stack} from "react-native-router-flux";
import Login from "../container/login/Login";
import Signup from "../container/signup/Signup";

export default class AppNavigator  extends Component{
    render(){
        return(
            <Router>
                <Stack key="root">
                    <Scene key="login" component={Login} title="Login" hideNavBar={true}/>
                    <Scene key="signup" component={Signup} title="Login" hideNavBar={true}/>
                </Stack>
            </Router>
        )
    }

}