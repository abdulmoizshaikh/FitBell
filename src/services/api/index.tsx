import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavigationService from '../navigationService';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorageAdapter from '../../utills/asyncStorageAdapter';
import {asyncStorage} from '../../utills';
const {getData} = new AsyncStorageAdapter('@HisaabApp');

Axios.interceptors.response.use(
  response => response,
  response => {
    if (response.response.status == 401) {
      try {
        AsyncStorage.removeItem('user').then(() => {
          //NavigationService.reset_0('LoginScreen');
        });
      } catch (err) {
        console.warn(err);
      }
    }
    return response.response;
  },
);

Axios.interceptors.request.use(async config => {
  try {
    const token = await asyncStorage.getToken();
    config.headers.Authorization = 'Bearer ' + token;
    return config;
  } catch (error) {
    console.log(error);
  }
});

export default class ApiCaller {
  static Get = (url = '', headers = {}, params = {}) =>
    Axios.get(url, {
      params: params,
      headers: {'Content-Type': 'application/json', ...headers},
    })
      .then(res => res)
      .catch(err => err.response);

  static Post = async (url = '', body = {}, headers = {}) =>
    Axios.post(url, body, {
      headers: {...headers},
    })
      .then(res => res)
      .catch(err => err);

  static Put = (url = '', body = {}, headers = {}) =>
    Axios.put(url, body, {
      headers: {'Content-Type': 'application/json', ...headers},
    })
      .then(res => res)
      .catch(err => err.response);

  static Patch = (url = '', body = {}, headers = {}) =>
    Axios.patch(url, body, {
      headers: {'Content-Type': 'application/json', ...headers},
    })
      .then(res => res)
      .catch(err => err.response);

  static Delete = (url = '', body = {}, headers = {}) =>
    Axios.delete(url, {
      headers: {...headers},
      data: body,
    })
      .then(res => res)
      .catch(err => err.response);
}
