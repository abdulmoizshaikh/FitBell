import {put, call, select, delay} from 'redux-saga/effects';
import {AuthActions} from '../actions';
import {showToast} from '../../config/utills';
import {ApiCaller} from '../../config';

import {myToken} from '../../services/notificationService';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationService} from '../../services';

const validateResponse = response => {
  return new Promise((res, rej) => {
    if (response) {
      if (response.status == 200) {
        res({success: true});
      } else {
        try {
          if (response.data.error.message != 'User status unverified.') {
            showToast(response.data.error.message);
          }
          res({success: false, message: response.data.error.message});
        } catch (error) {
          showToast('Something went wrong');
          res({success: false});
        }
      }
    } else {
      res({success: false});
      showToast('Something went wrong');
    }
  });
};

export function* login(action) {
  const {payload} = action;
  //let {myToken} = yield select(fcmToken);
  //const fcmToken = 'nnn';
  console.log('device token from login saga', myToken);
  //return;
  const response = yield call(
    ApiCaller.Post,
    'login',
    {
      ...action.payload,
      current_time: moment().format('YYYY-MM-DD HH:mm:ss'),
      device_token: myToken?.token,
    },
    {'content-type': 'application/json'},
  );
  //console.log(response, 'login');
  //Server not working for testing only below line
  // NavigationService.reset_0('Tabs');
  // return
  //end server not working
  const response_status = yield call(validateResponse, response);

  if (response_status.success) {
    if (response.data.success.data.user_interests.length > 1) {
      try {
        AsyncStorage.setItem(
          'user',
          JSON.stringify(response.data.success.data),
        );
      } catch {}
      yield put({
        type: AuthActions.LOGIN_SUCCESS,
        payload: response.data.success.data,
      });
      NavigationService.reset_0('Tabs');
    } else {
      NavigationService.navigate('SignupScreen2', {
        user_data: response.data.success.data,
      });
    }
  } else {
    if (response_status.message == 'User status unverified.') {
      //console.log(response_status.message, "from login saga in if", payload.username, 'this is username');
      yield put(
        AuthActions.resetPassword({
          email: payload.username,
          fromForgotPassword: false,
        }),
      );
      yield put({
        type: AuthActions.SIGNUP_SUCCESS,
        payload: {email: payload.username},
      });
      showToast('Code has been sent to your email', 'success');
      NavigationService.navigate('VerifyCodeScreen');
    }
    yield put({type: AuthActions.LOGIN_FAIL});
  }
}
