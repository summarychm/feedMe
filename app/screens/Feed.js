import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView
} from 'react-native';
import {
    List,
    ListItem
} from 'react-native-elements';
import {users} from "../config/data";

class Feed extends Component {
    constructor(props){
        super(props);
        console.log(users);
    }
    render(){
        return(
            <ScrollView>
                <Text>Feed页面</Text>
            </ScrollView>
        )
    }
}
export default Feed;
