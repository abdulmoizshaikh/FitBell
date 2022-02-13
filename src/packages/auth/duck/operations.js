import { AsyncStorage } from 'react-native';
import { authActions } from './index';
import { apiService } from "../../../common/utils/api-service";
import { accountActions } from '../../account/duck';
import { snackbarActions } from '../../snackbar/duck'
import APIService from "../../../common/utils/api-service-instance";

const signUp = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        async function onRequest() { dispatch(authActions.signUpRequest()) }
        async function onSuccess(response) {
            AsyncStorage.setItem('access_token', response.data.access_token);
            APIService.addDefaultHeaders({ 'Authorization': response.data.access_token });
            dispatch(authActions.signUpSuccess(response.data));
            dispatch(accountActions.getProfileSuccess(response.data));
            dispatch(snackbarActions.showSnackbar({ message: "Successfully Signup!!", type: 'success' }))
            resolve(response.data);
        }
        async function onError(err) {
            let errorResponse = err.response ? err.response.data : err;
            dispatch(authActions.signUpFailed());
            dispatch(snackbarActions.showSnackbar({ message: errorResponse.message, type: 'danger' }))
            reject(err);
        }
        onRequest();
        APIService.request({
            method: 'post', url: '/register', data: data
        }).then(onSuccess).catch(onError);
    })
};



const login = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        async function onRequest() { dispatch(authActions.loginRequest()) }
        async function onSuccess(response) {
            AsyncStorage.setItem('access_token', response.data.access_token);
            APIService.addDefaultHeaders({ 'Authorization': response.data.access_token });
            dispatch(authActions.loginSuccess(response.data));
            dispatch(accountActions.getProfileSuccess(response.data));
            dispatch(snackbarActions.showSnackbar({ message: response.message, type: 'success' }))
            resolve(response.data);
        }
        async function onError(err) {
            let errorResponse = err.response ? err.response.data : err;
            dispatch(snackbarActions.showSnackbar({ message: errorResponse.message, type: "danger" }))
            dispatch(authActions.loginFailed());
            reject(err);
        }
        onRequest();
        APIService.request({
            method: 'post', url: '/login', data: data
        }).then(onSuccess).catch(onError);
    })
};

const loginFacebook = (token) => (dispatch) => {
    let data = {
        access_token: token
    };
    return new Promise((resolve, reject) => {

        async function onSuccess(response) {
            // console.log("onSuccess", response.data) 
            AsyncStorage.setItem('access_token', response.data.access_token);
            APIService.addDefaultHeaders({ 'Authorization': response.data.access_token });
            dispatch(authActions.loginSuccess(response.data));
            dispatch(accountActions.getProfileSuccess(response.data));
            dispatch(snackbarActions.showSnackbar({ message: "login Success", type: 'success' }))
            resolve(response)
        }
        async function onError(err) {
            // console.log("onError", err)
            let errorResponse = err.response ? err.response.data : err;
            dispatch(authActions.loginFailed());
            dispatch(snackbarActions.showSnackbar({ message: errorResponse.message, type: 'danger' }))
            reject(errorResponse);
        }
        APIService.request({
            method: 'post', url: '/auth-facebook', data: data
        }).then(onSuccess).catch(onError);

    })
};






const forgotPassword = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        async function onRequest() { dispatch(authActions.forgotPasswordRequest()) }
        async function onSuccess(response) {
            dispatch(snackbarActions.showSnackbar({ message: response.message, type: "success" }))
            dispatch(authActions.forgotPasswordSuccess(response.data));
            resolve(response.data);
        }
        async function onError(err) {
            let errorResponse = err.response ? err.response.data : err;
            dispatch(snackbarActions.showSnackbar({ message: errorResponse.message, type: "danger" }))
            dispatch(authActions.forgotPasswordFailed());
            reject(err);
        }
        onRequest();
        APIService.request({
            method: 'post', url: '/forgot-password', data: data
        }).then(onSuccess).catch(onError);
    })
};


const verificationCode = (data) => (dispatch) => {
    dispatch(authActions.verificationCode(data))
}


const validateVerificationCode = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        async function onRequest() { dispatch(authActions.validateVerificationCodeRequest()) }
        async function onSuccess(response) {
            dispatch(authActions.validateVerificationCodeSuccess(response.data));
            resolve(response.data);
        }
        async function onError(err) {
            let errorResponse = err.response ? err.response.data : err;
            dispatch(snackbarActions.showSnackbar({ message: errorResponse.message, type: "danger" }))
            dispatch(authActions.validateVerificationCodeFailed());
            reject(err);
        }
        onRequest();
        APIService.request({
            method: 'post', url: '/verify-token', data: data
        }).then(onSuccess).catch(onError);
    })
};




const resetPassword = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        async function onRequest() { dispatch(authActions.resetPasswordRequest()) }
        async function onSuccess(response) {
            dispatch(authActions.resetPasswordSuccess(response.data));
            dispatch(snackbarActions.showSnackbar({ message: response.message, type: 'success' }))
            resolve(response.data);
        }
        async function onError(err) {
            let errorResponse = err.response ? err.response.data : err;
            dispatch(snackbarActions.showSnackbar({ message: errorResponse.message, type: "danger" }))
            dispatch(authActions.resetPasswordFailed());
            reject(err);
        }
        onRequest();
        APIService.request({
            method: 'post', url: '/reset-password', data: data
        }).then(onSuccess).catch(onError);
    })
};

const getToken = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        const token = AsyncStorage.getItem('access_token');
        if (token) {
            dispatch(authActions.saveToken(token));
            resolve(token)
        }
        reject(false)
    })
};

const saveDeviceId = (deviceId) => (dispatch) => {
    dispatch(authActions.saveDeviceId(deviceId));
};


const unauthorize = () => (dispatch) => {
    return new Promise(() => {
        AsyncStorage.removeItem('access_token');
        dispatch(authActions.unauthorize());
    })
};

const logout = () => (dispatch) => {
    return new Promise((resolve) => {
        AsyncStorage.removeItem("access_token");
        dispatch(authActions.logout());
        dispatch(snackbarActions.showSnackbar({ message: "Successfully Logout", type: "success" }))
        resolve(true)
    })
};

export {
    login,
    loginFacebook,
    signUp,
    forgotPassword,
    verificationCode,
    validateVerificationCode,
    resetPassword,
    getToken,
    unauthorize,
    saveDeviceId,
    logout
}