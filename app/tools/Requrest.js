import queryString from 'query-string';
import _ from 'lodash';
import {Config} from '../config/config'

export let Request = {
    get: (url, params) => {
        //
        if (params) {
            url += "?" + queryString.stringify(params);
        }
        return fetch(url)
            .then(response => response.json())
            .catch(error => console.error("get请求错误", error))
    },
    post: (url, body) => {
        //method: 'POST',
        let options = _.extend({method: 'POST'}, Config.headers, {
            body: JSON.stringify(body)
        });
        return fetch(url, options)
            .then(response => response.json())
            .catch(error => console.error("post请求错误", error))
    },
    put: (url, body) => {
        let options = _.extend({method: 'PUT'}, Config.headers, {
            body: JSON.stringify(body)
        });
        return fetch(url, options)
            .then(response => response.json())
            .catch(error => console.error("put请求错误", error))
    },
    delete: (url) => {
        return fetch(url, {method: "delete"})
            .then(response => response.json())
            .catch(error => console.error("delete请求错误", error))
    }
}
