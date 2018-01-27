import React from 'react';
import {Image} from 'react-native';
import {TabNavigator, StackNavigator, NavigationActions} from 'react-navigation';
import {Button} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Feed from '../screens/Feed';
import Detail from '../screens/Detail';

const navigateAction = NavigationActions.navigate({
    routeName: 'Feed',
    params: {},
    // navigate can have a nested navigate action that will be run inside the child router
    action: NavigationActions.navigate({routeName: 'Detail'})
})

const MainStack = StackNavigator({
    Feed: {
        screen: Feed,
        path: '/',
        navigationOptions: {
            title: "好友列表"
        }
    },
    Detail: {
        screen: Detail,
        path: '/Detail',
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.user ? navigation.state.params.user.name : ""}的详细信息`,
            headerRight: <Button title={'Edit'}
                                 icon={{name: "ios-menu", type: "ionicon"}}
                                 buttonStyle={{backgroundColor: "#2196f3"}}
                                 onPress={() => {
                                     navigation.dispatch(
                                         NavigationActions.navigate({routeName: 'Feed',params: {}}));
                                 }}
            />
        })
    }
});

const Account = StackNavigator({
    Account: {
        screen: Detail,
        path: '/Detail',
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params ? navigation.state.params.name + "的" : ""}详细信息`,
        })
    }
});

export const Tabs = TabNavigator({
    MainStack: {
        screen: MainStack,
        navigationOptions:
            {
                tabBarIcon: ({tintColor, focused}) => (
                    <Ionicons
                        name={focused ? 'ios-contacts' : 'ios-contacts-outline'}
                        size={26}
                        style={{color: tintColor}}
                    />
                ),
            }
    },
    Account: {
        screen: Account,
        navigationOptions: {
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={focused ? 'ios-contact' : 'ios-contact-outline'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    }
}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        //是否显示图标
        showIcon: true,
        //是否允许在标签间滑动
        swipeEnabled: true,
        showLabel: false,
    }
});






