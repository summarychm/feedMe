import React from 'react';

import {
    View,
    Text,
} from 'react-native';

import {
    Avatar
} from 'react-native-elements'

class AvatarDemo extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (<View>
            <Text style={{fontSize: 30}}>Avatar</Text>
            <Avatar
                rounded
                source={{uri: "https://static.hdslb.com/images/member/noface.gif"}}
                title="MT"
                width={200}
                height={200}
                onPress={() => console.log("Works!")}
                icon={{
                    name: "3d-rotation"
                }}
                activeOpacity={0.7}
            />
            <Avatar
                medium
                title="BP"
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
            />
        </View>)
    }
}

export default AvatarDemo