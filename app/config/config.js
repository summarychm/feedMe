import { Dimensions } from 'react-native';

const BASE_URL = "http://192.168.1.5:5001";
// const BASE_URL = "http://192.168.40.158:5001";

export const Config = {
    accessToken: "abc123",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    URL: {
        users: BASE_URL + "/users",
        me: BASE_URL + "/me"
    },
    Styles:{
        ColorMain:"#2196f3",
        DeviceWidth:Dimensions.get("window").width,
        DeviceHeight:Dimensions.get("window").height,
    }
}

