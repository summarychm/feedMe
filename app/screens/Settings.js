import React from 'react';
import {View, ScrollView} from 'react-native';
import {Text} from 'react-native-elements';

//import { Input } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/Ionicons';



//因为React-Native-Elements的v1.0.0-beta版中Input组件被暂时隐去,暂缓开发.
export default class Settings extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {}
        };
    }

    componentDidMount() {
        if (this.props.navigation.state.params) {
            this.setState({
                user: this.props.navigation.state.params.user
            })
        }
    }

    render() {
        const user = this.state.user;
        return (<ScrollView>
            <Text h2>Settings</Text>
        </ScrollView>)

    }
}