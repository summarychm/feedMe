import React from 'react';
import {
    ScrollView,
    Text,
    View
} from 'react-native';
import {Tile, List, ListItem, Button} from 'react-native-elements';
import {polyfill} from '../tools/polyfillTools';
import {Config} from "../config/config";

class Detail extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {}
        };
    }

    render() {
        console.log(this.props);
        let navigation = this.props.navigation;
        let user = {};
        //通讯录好友或管理员本人
        user = navigation.state.params ? navigation.state.params.user : this.props.screenProps.admin;
        return (<ScrollView>
            <Tile
                imageSrc={{uri: user.avatar}}
                featured
                title={`${user.name}`}
                caption={polyfill.phoneFormat(user.phone)}
            />

            <View style={{flexDirection: "row", justifyContent: "space-between", padding: 10}}>
                <Button
                    title="Call"
                    medium
                    icon={{name: "ios-call", type: "ionicon"}}
                    buttonStyle={{backgroundColor: "#2196f3", width: Config.Styles.DeviceWidth * 0.3}}
                    /* onPress={this.handleSettingsPress}*/
                />
                <Button
                    title="SMS"
                    medium
                    icon={{name: "ios-chatbubbles", type: "ionicon"}}
                    buttonStyle={{backgroundColor: "#2196f3", width: Config.Styles.DeviceWidth * 0.3}}
                />
            </View>

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