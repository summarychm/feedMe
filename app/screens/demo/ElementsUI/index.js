import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';
import {
    Icon,
    Button,
    Badge,
    SocialIcon,
} from 'react-native-elements';

import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';

import CardDemo from './Card';
import ButtonDemo from './Button';
import AvatarDemo from './Avatar';

const App = TabNavigator(
    {
        ButtonDemo: {
            screen: ButtonDemo,
            path: '/ButtonDemo',
            navigationOptions: {
                tabBarLabel: 'ButtonDemo',
                tabBarIcon: ({tintColor, focused}) => (
                    <Icon
                        name='whatshot'
                        size={30}
                        type="MaterialIcons"
                        color={tintColor}
                    />
                ),
            }
        },
       CardDemo: {
            screen: CardDemo,
            path: '/CardDemo',
            navigationOptions: {
                tabBarLabel: 'CardDemo',
                tabBarIcon: ({tintColor, focused}) => (
                    <Icon
                        name='whatshot'
                        size={30}
                        type="MaterialIcons"
                        color={tintColor}
                    />
                ),
            }
        },
        AvatarDemo: {
            screen: AvatarDemo,
            path: '/AvatarDemo',
            navigationOptions: {
                tabBarLabel: 'AvatarDemo',
                tabBarIcon: ({tintColor, focused}) => (
                    <Icon
                        name='account-circle'
                        size={30}
                        type="material-community"
                        color={tintColor}
                    />
                ),
            }
        }
    }, {
        initialRouteName: 'ButtonDemo',
        tabBarPosition:'bottom',
        animationEnabled: true,
        swipeEnabled: true,

        tabBarOptions: {
            labelStyle: {
                fontSize: 12,
            },
            tabStyle: {
                width: 100,
            },
            style: {
                backgroundColor: 'blue',
            },
            activeTintColor: '#e91e63',
        },
    }
)
/*  CardDemo: {
           screen: CardDemo,
           path: '/CardDemo',
           navigationOptions: {
               tabBarLabel: 'CardDemo',
               tabBarIcon: ({tintColor, focused}) => (
                   <Icon
                       name='face'
                       size={30}
                       type="MaterialIcons"
                       color={tintColor}
                   />
               ),
           }
       },*/

export default class ElementIndex extends React.Component {
    constructor() {
        super();
        this.state = {  };
    }

    render() {
        return (<App screenProps={{aaa:1,bbb:222}} />)

        /* return (
             <ScrollView>

                 <CardDemo users={this.users}/>
                 <ButtonDemo/>
                 <AvatarDemo/>


                 <Text>Badge</Text>
                 <Badge
                     value={3}
                     textStyle={{color: 'orange'}}
                 />
                 <Badge
                     containerStyle={{backgroundColor: 'red'}}
                     wrapperStyle={{backgroundColor: 'green', height: 50}}
                 >
                     <Text>User 1</Text>
                 </Badge>
                 <Badge onPress={() => {
                     console.log('pressed')
                 }} value="5"/>

                 <Badge component={TouchableNative} value={10}/>


             </ScrollView>
         )*/
    }
}

