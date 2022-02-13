import {
    UTILS_LOADING,
    GET_ALL_ROLES,
} from '../ActionTypes';
import endpoint from 'source/constants/endpoint';
import axios from 'axios';

export const getRoles = () => dispatch => {
    try {
        dispatch({ type: UTILS_LOADING, payload: true })

        axios.get(
            endpoint+"/api/v1/roles"
        ).then(async response => {
            
            if(response.status === 200) {
                dispatch({
                    type: GET_ALL_ROLES,
                    payload: response?.data?.data || []
                });
            } else {
                dispatch({
                    type: UTILS_LOADING,
                });
            }
        }).catch(error => {
            dispatch({
                type: UTILS_LOADING,
            });
        })
    } catch (error) {
        dispatch({
            type: UTILS_LOADING,
        });
    }
}