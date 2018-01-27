import React from 'react';
import {
    ScrollView,
    Text
} from 'react-native';
import {Tile, List, ListItem, Button} from 'react-native-elements';

class Detail extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {}
        };

    }

    render() {
        let user = {};
        user = this.props.navigation.state.params || this.props.screenProps.admin;
        // console.log(user);
        return (<ScrollView>
            <Tile
                imageSrc={{uri: user.avatar}}
                featured
                title={`${user.name}`}
                caption={user.email}
            />

            <Button
                title="Settings"
                buttonStyle={{marginTop: 20}}
                /* onPress={this.handleSettingsPress}*/
            />

            <List>
                <ListItem
                    title="Email"
                    rightTitle={user.email}
                    hideChevron
                />
                <ListItem
                    title="Phone"
                    rightTitle={user.phone}
                    hideChevron
                />
            </List>
            <List>
                <ListItem
                    title="Birthday"
                    rightTitle={user.birthday}
                    hideChevron
                />
                <ListItem
                    title="City"
                    rightTitle={user.address}
                    hideChevron
                />
            </List>
        </ScrollView>)
    }
}

export default Detail;