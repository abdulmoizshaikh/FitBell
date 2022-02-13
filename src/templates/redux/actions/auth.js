import {
    LOGIN,
    LOGOUT,
    AUTH_LOADING,
    SAVE_REGISTER_DATA,
} from '../ActionTypes';
import Toast from 'react-native-toast-message';
import endpoint from 'source/constants/endpoint';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import axios from 'axios';

export const login = (data, cb) => dispatch => {
    try {
        dispatch({ type: AUTH_LOADING, payload: true })

        axios.post(
            endpoint+"/api/v1/auth/login",
            data
        ).then(async response => {
            
            if(response.status === 200) {
                let token = response.data.token;
                await AsyncStorage.setItem('@token', token);

                dispatch({
                    type: LOGIN,
                    payload: {
                        user: response.data.user,
                        roles: response.data.roles ? response.data.roles.map(r => r.name) : []
                    },
                });

                cb && cb();
            } else {
                Toast.show({
                    type: 'error',
                    position: 'top',
                    text1: 'Error',
                    text2: response.data.message || 'Something went wrong!',
                    visibilityTime: 3000,
                    autoHide: true,
                    topOffset: 30,
                });
            
                dispatch({
                    type: AUTH_LOADING,
                });
            }
        }).catch(error => {
            Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Error',
                text2: error?.response?.data?.message || error.message || 'Something went wrong!',
                visibilityTime: 3000,
                autoHide: true,
                topOffset: 30,
            });
            
            dispatch({
                type: AUTH_LOADING,
            });
        })

    } catch (error) {
        dispatch({
            type: AUTH_LOADING,
        });
    }
}

export const getCurrentUser = (cb) => async dispatch => {
    try {
        dispatch({ type: AUTH_LOADING, payload: true })

        let token = await AsyncStorage.getItem('@token');

        if(token && token !== "") {

            let config = {
                method: 'post',
                url: `${endpoint}/api/v1/auth/me`,
                headers: { 
                  'Accept': 'application/json', 
                  'Content-Type': 'application/json', 
                  'Authorization': `Bearer ${token}`
                },
            };

            axios(config)
                .then(async response => {
                
                if(response.status === 200) {
                    let token = response.data.token;
                    await AsyncStorage.setItem('@token', token);
    
                    dispatch({
                        type: LOGIN,
                        payload: {
                            user: response.data.user,
                            roles: response.data.roles ? response.data.roles.map(r => r.name) : []
                        },
                    });
    
                    cb && cb();
                } else {
                    Toast.show({
                        type: 'error',
                        position: 'top',
                        text1: 'Error',
                        text2: response.data.message || 'Something went wrong!',
                        visibilityTime: 3000,
                        autoHide: true,
                        topOffset: 30,
                    });
                
                    dispatch({
                        type: AUTH_LOADING,
                        payload: false
                    });
    
                    cb && cb();
                }
            }).catch(error => {
                Toast.show({
                    type: 'error',
                    position: 'top',
                    text1: 'Error',
                    text2: error?.response?.data?.message || error.message || 'Something went wrong!',
                    visibilityTime: 3000,
                    autoHide: true,
                    topOffset: 30,
                });
                
                dispatch({
                    type: AUTH_LOADING,
                    payload: false
                });
    
                cb && cb();
            })
        } else {
            dispatch({
                type: AUTH_LOADING,
                payload: false
            });
    
            cb && cb();
        }
    } catch (error) {
        dispatch({
            type: AUTH_LOADING,
            payload: false
        });
    
        cb && cb();
    }
}

export const logout = (cb) => async (dispatch) => {
    try {
        await AsyncStorage.clear();

        dispatch({
            type: LOGOUT
        });

        cb && cb();
    } catch (e) {
        dispatch({ type: AUTH_LOADING, payload: false });
    }
};

export const loginWithYoutube = (data, cb) => async dispatch => {
    try {
        dispatch({ type: AUTH_LOADING, payload: true })

        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        console.log("Google User Info: ", userInfo)
        dispatch({ type: AUTH_LOADING, payload: false })

        // axios.post(
        //     endpoint+"/api/v1/auth/login",
        //     data
        // ).then(async response => {
            
        //     if(response.status === 200) {
        //         let token = response.data.token;
        //         await AsyncStorage.setItem('@token', token);

        //         dispatch({
        //             type: LOGIN,
        //             payload: {
        //                 user: response.data.user,
        //                 roles: response.data.roles ? response.data.roles.map(r => r.name) : []
        //             },
        //         });

        //         cb && cb();
        //     } else {
        //         Toast.show({
        //             type: 'error',
        //             position: 'top',
        //             text1: 'Error',
        //             text2: response.data.message || 'Something went wrong!',
        //             visibilityTime: 3000,
        //             autoHide: true,
        //             topOffset: 30,
        //         });
            
        //         dispatch({
        //             type: AUTH_LOADING,
        //         });
        //     }
        // }).catch(error => {
        //     Toast.show({
        //         type: 'error',
        //         position: 'top',
        //         text1: 'Error',
        //         text2: error?.response?.data?.message || error.message || 'Something went wrong!',
        //         visibilityTime: 3000,
        //         autoHide: true,
        //         topOffset: 30,
        //     });
            
        //     dispatch({
        //         type: AUTH_LOADING,
        //     });
        // })

    } catch (error) {
        console.log("loginWithYoutube error: ", error, JSON.stringify(error))
        dispatch({
            type: AUTH_LOADING,
        });
    }
}

export const saveRegisterData = (data) => dispatch => {
    dispatch({
        type: SAVE_REGISTER_DATA,
        payload: data
    })
}