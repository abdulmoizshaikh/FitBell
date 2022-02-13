import {
    UTILS_LOADING,
    GET_ALL_ROLES
} from '../ActionTypes';

const initState = {
    roles: [],
    loading: false,
}

export default function reducer(state=initState, action) {
    let { type, payload } = action;

    switch (type) {
        case GET_ALL_ROLES:
            return {
                ...state,
                roles: payload,
                loading: false,
            }

        case UTILS_LOADING:
            return {
                ...state,
                loading: payload,
            }
    
        default:
            return state;
    }
}