import React from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    Linking
} from 'react-native';
import {Tile, List, Text, ListItem, Button, Avatar} from 'react-native-elements';
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
        // console.log(this.props);
        let navigation = this.props.navigation;
        let user = {};
        //通讯录好友或管理员本人
        user = navigation.state.params ? navigation.state.params.user : this.props.screenProps.admin;
        return (<ScrollView>
            <View style={[styles.flexRow, {justifyContent: 'center', alignItems: 'center'}]}>
                <Avatar
                    xlarge
                    rounded
                    source={{uri: user.avatar}}
                    activeOpacity={0.7}
                />
                <Text style={{
                    fontSize: 30,
                    color: Config.Styles.ColorMain,
                    marginLeft: 50,
                }}>{user.name}</Text>
            </View>

            <View style={{flexDirection: "row", justifyContent: "space-between", padding: 10}}>
                <Button
                    title="Call"
                    medium
                    icon={{name: "ios-call", type: "ionicon"}}
                    buttonStyle={{backgroundColor: Config.Styles.ColorMain, width: Config.Styles.DeviceWidth * 0.3}}
                    onPress={() => {
                        Linking.openURL('tel:' + user.phone)
                    }}
                />
                <Button
                    title="SMS"
                    medium
                    icon={{name: "ios-chatbubbles", type: "ionicon"}}
                    buttonStyle={{backgroundColor: Config.Styles.ColorMain, width: Config.Styles.DeviceWidth * 0.3}}
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

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: "row",
        padding: 10
    }
})

export default Detail;