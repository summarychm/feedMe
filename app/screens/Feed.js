import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    FlatList,
    RefreshControl,
    ActivityIndicator
} from 'react-native';
import {
    ListItem
} from 'react-native-elements';

import {Config} from "../config/config";
import {Request} from '../tools/Requrest';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.cacheData = {
            limit: 10,
            total: 30,
        }
        this.state = {
            nextIndex: 1,
            users: [],
            isLoadingTail: false,
            isRefreshing: false,
        };
    }

    componentDidMount = () => {
        this._fetchData(this.state.nextIndex)
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.users}
                    renderItem={user => this._renderListRow(user)}
                    keyExtractor={user => user.id}
                    //消除IOS下顶部空白
                    automaticallyAdjustContentInsets={false}
                    //是否显示Y轴滚动条
                    showsVerticalScrollIndicator={true}
                    //距离底部20dp触发就触发onEndReached回调
                    onEndReachedThreshold={0.5}
                    //触底刷新事件
                    onEndReached={this._fetchMore}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._onRefresh}
                            tintColor="#ff0000"
                            title="Loading..."
                            titleColor="#00ff00"
                            progressBackgroundColor="#eee"
                        />
                    }
                />
            </View>
        )
    }

    //行渲染
    _renderListRow = (user) => {
        user = user.item;
        return <ListItem
            key={user.name}
            roundAvatar
            avatar={{uri: user.avatar}}
            title={`${user.name}`}
            subtitle={user.phone.slice(0, 3) + "-" + user.phone.slice(3, 7)+ "-" + user.phone.slice(7)}
            onPress={() => this.onLearnMore(user)}
        />
    }
    //查看详情
    onLearnMore = (user) => {
        this.props.navigation.navigate('Detail', {user:user})
    }
    //下拉刷新
    _onRefresh = () => {
        if (!this._hasMore() || this.state.isRefreshing)
            return;
        else
            this._fetchData(this.state.nextIndex);
    }
    //是否还有更多数据
    _hasMore = () => {
        return this.state.users.length <= this.cacheData.total;
    }
    //加载更多数据
    _fetchMore = () => {
        if (!this._hasMore() || this.state.isLoadingTail) {
            return;
        }
        this.setState({
            isLoadingTail: true,
        }, () => {
            this._fetchData(this.state.nextIndex);
        });
    }
    //加载更多数据
    _fetchData = (nextIndex) => {
        if (nextIndex > 0) {
            this.setState({
                isLoadingTail: true
            });
        } else {
            this.setState({
                isRefreshing: true
            });
        }

        Request.get(Config.URL.users, {
            accessToken: Config.accessToken,
            _page: nextIndex,
            _limit: this.cacheData.limit
        }).then(data => {
            let newData = this.state.users.slice();
            newData = this.state.isRefreshing ? newData.concat(data) : data.concat(newData);
            this.setState({
                isLoadingTail: false,
                isRefreshing: false,
                nextIndex: nextIndex + 1,
                users: newData
            }, () => {
                // console.log(this.state);
            })
        }).catch(error => {
            this.setState({
                isLoadingTail: false,
                isRefreshing: false,
            });
            console.error("_fetchData方法出错,", error)
        });
    }

}

export default Feed;
