import axios from 'axios';
import configs from "../config";

// const baseUrl = process.env.REACT_APP_API_URL;
const BASE_URL = configs.API_BASE_URL + configs.API_VERSION

export async function apiService(method, uri, data, headers = {}, params = null) {
    let query = {
        method: method,
        url: uri ? BASE_URL + uri : BASE_URL,
        headers: headers
    }


    // Set token if found
    // query.headers["Authorization"] = await AsyncStorage.getItem('access_token') || null;




    // if (headers !== null) {
    //     query.headers = headers;
    // }

    if (params !== null) {
        query.params = params;
    }

    if (method === 'post' || method === 'put' || method === 'delete' || method === 'patch') {
        query.data = data;
    }

    // console.log("query", query);
    return axios(query);

}


// BASE_API_URL=http://fitbowl-api.herokuapp.com/api
