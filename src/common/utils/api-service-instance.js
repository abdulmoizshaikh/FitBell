import axios from 'axios';
import configs from '../config';

const baseUrl = configs.API_BASE_URL + configs.API_VERSION;

class APIService {
  static instance;

  static configure = (configs = {}) => {
    APIService.instance = axios.create({
      baseURL: baseUrl,
      ...configs,
    });
    APIService.attachInterceptors();
  };

  static addDefaultHeaders = headers => {
    for (let key in headers) {
      if (headers.hasOwnProperty(key))
        APIService.instance.defaults.headers.common[key] = headers[key];
    }
  };

  static request = configs => {
    console.log(baseUrl);
    return APIService.instance.request(configs);
  };

  static responseInterceptor = response => {
    if (
      typeof response.data === 'string' &&
      response.data.indexOf('<!doctype html>') >= 0
    ) {
      let errorMessage = 'Server error: Please report this to Sara!';
      throw errorMessage;
    }
    return response.data;
  };

  static errorInterceptor = error => {
    return error.response.data;
  };

  static attachInterceptors = () => {
    APIService.instance.interceptors.response.use(
      APIService.responseInterceptor,
    );
  };
}

export default APIService;
