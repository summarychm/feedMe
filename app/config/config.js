const BASE_URL = "http://192.168.1.5:5001";

export const Config = {
    accessToken: "abc123",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    API: {
        users: BASE_URL + "/users",
        mean: BASE_URL + "/me"
    }
}