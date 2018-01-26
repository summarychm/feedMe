import React from 'react';

import {
    View,
    Text,
} from 'react-native';

import {
    Button
} from 'react-native-elements'

class ButtonDemo extends React.Component {
    constructor() {
        super();
    }

    render() {
        console.log(this.props);
        return (<View>
            <Text style={{fontSize: 30}}>Button</Text>
            <Button
                title='BUTTON' />

            <Button
                raised
                icon={{name: 'cached'}}
                title='BUTTON WITH ICON' />

            <Button
                large
                iconRight={{name: 'code'}}
                title='LARGE WITH RIGHT ICON' />

            <Button
                small
                icon={{name: 'envira', type: 'font-awesome'}}
                title='LARGE WITH ICON TYPE' />

            <Button
                large
                icon={{name: 'squirrel', type: 'octicon'}}
                title='OCTICON' />
            <Button
                raised
                loading
                loadingRight
                transparent
                icon={{name: 'home', size: 32}}
                buttonStyle={{backgroundColor: 'red', borderRadius: 50}}
                textStyle={{textAlign: 'center'}}
                title={`Welcome to\nReact Native Elements`}/>


        </View>)
    }
}

export default ButtonDemo