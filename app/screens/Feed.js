import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView
} from 'react-native';
import {
    List,
    ListItem
} from 'react-native-elements';

import {Config} from "../config/config";
import {Request} from '../tools/Requrest';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.cacheData = {
            limit: 10,
            total: 100,
        }
        this.state = {
            currentIndex: 1,
            users: []
        };
    }

    componentDidMount = () => {
        this._fetchData(this.state.currentIndex)
    }

    render() {
        return (
            <ScrollView>
                <Text>Feed页面</Text>
                <List>
                    {this._renderListRow()}
                </List>
            </ScrollView>
        )
    }
    //行渲染
    _renderListRow = () => {
        let users = this.state.users;
        return users.map((user) => (
            <ListItem
                key={user.name}
                roundAvatar
                avatar={{uri: user.avatar}}
                title={`${user.name}`}
                subtitle={user.email}
                onPress={() => this.onLearnMore(user)}
            />
        ))
    }
    //查看详情
    onLearnMore = (user) => {
        //console.log(user);

    }
    //加载更多数据
    _fetchData = (currentIndex) => {
        Request.get(Config.API.users, {
            _page: currentIndex,
            _limit: this.cacheData.limit
        }).then(data => {
            this.setState({
                currentIndex: currentIndex + 1,
                users: data
            })
        }).catch(error => console.error("_fetchData方法出错,", error));
    }

}

export default Feed;
