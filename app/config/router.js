import React from 'react';
import {Image,Alert} from 'react-native';
import {TabNavigator, StackNavigator, NavigationActions} from 'react-navigation';
import {Button} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Feed from '../screens/Feed';
import Detail from '../screens/Detail';
//import Settings from '../screens/Settings';


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
            headerRight: <Button
                icon={{name: "ios-menu", type: "ionicon"}}
                buttonStyle={{backgroundColor: "#2196f3"}}
                onPress={()=>{Alert.alert("提示","准备等React-Native-Element发布1.0正式版后开发编辑界面!")}}
            />
        })
    },
    /*
     navigation.dispatch(
        NavigationActions.navigate({
            routeName: 'Settings',
            params: {user: navigation.state.params.user}
        }));
    Settings: {
         screen: Settings,
         path: "/Settings",
         navigationOptions: {
             title: "Settings",
         }

     }*/
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






