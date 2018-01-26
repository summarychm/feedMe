import React from 'react';

import {
    View,
    Text,
    ScrollView
} from 'react-native';

import {
    Card,
    Button,
    ListItem,
} from 'react-native-elements'

class CardDemo extends React.Component {
    constructor() {
        super();
        this.users = [
            {
                name: 'apple',
                avatar: 'http://iph.href.lu/50x50?text=apple'
            },
            {
                name: 'banana',
                avatar: 'http://iph.href.lu/50x50?text=banana'
            },
            {
                name: 'cat',
                avatar: 'http://iph.href.lu/50x50?text=cat'
            },
            {
                name: 'dog',
                avatar: 'http://iph.href.lu/50x50?text=dog'
            },
        ]
    }

    render() {
        return (<ScrollView>
            <Text style={{fontSize: 30}}>Card示例</Text>
            <Card title={`我是Card1的标题`}
                  image={require('./image/pic1.jpg')}>
                <Text>正文内容1</Text>
                <Text>正文内容2</Text>
                <Text>正文内容3</Text>
                <Button
                    icon={{name: "code"}}
                    backgroundColor="#03A9F4"
                    fontFamily='Lato'
                    buttonStyle={{borderRadius: 0, margin: 0}}
                    title={"VIEW NOW"}
                />
            </Card>

            <Card
                title={"我是Card2的标题"}
                containerStyle={{padding: 10}}
                image={require('./image/pic1.jpg')}
            >
                <Text>支持图片,列表,标题等多种属性混用</Text>
                {
                    this.users.map((user, index) => {
                        return <ListItem key={index} title={user.name}
                                         avatar={{uri: user.avatar}}/>
                    })
                }
            </Card>
        </ScrollView>);
    }
}

export default CardDemo;


