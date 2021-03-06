import React from 'react';
import {
    AsyncStorage,
    Text,
    View
} from 'react-native';

import {Tabs} from "./app/config/router";

import {Config} from "./app/config/config";
import {Request} from './app/tools/Requrest';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            admin: {}
        }
    }

    componentDidMount() {
        Request.get(Config.URL.me, {
            accessToken: Config.accessToken,
        }).then(data => {
            if (data) {
                AsyncStorage.setItem("admin", JSON.stringify(data))
                this.setState({admin: data})
            }
        }).catch(err => {
            console.error("获取登录信息出错,", err);
        })
    }
    render() {
        return (<Tabs screenProps={{"admin": this.state.admin}}/>)
    }
}
