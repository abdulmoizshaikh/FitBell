import {
    LOGIN,
    LOGOUT,
    AUTH_LOADING,
    SAVE_REGISTER_DATA
} from '../ActionTypes';

const initState = {
    registerData: null,
    loading: false,
    isAuth: false,
    user: null,
    role: ''
}

export default function(state = initState, action) {
    let { payload } = action;

    switch (action.type) {
        case AUTH_LOADING:
            return {
                ...state,
                loading: payload
            }

        case LOGIN:
            return {
                ...state,
                isAuth: true,
                loading: false,
                user: payload.user,
                role: payload.role,
            }

        case LOGOUT:
            return {
                ...state,
                role: '',
                user: null,
                isAuth: false,
                loading: false,
            }

        case SAVE_REGISTER_DATA:
            return {
                ...state,
                registerData: {
                    ...state.registerData,
                    ...payload
                }
            }

        case "AUTHENTICATE_APP":
            return {
                ...state,
                isAuth: true,
                user: {
                    id: "32ejbn2kjen2k3ne90xa8s0x9aZxcVX",
                    name: "Hamza"
                }
            }
    
        default:
            return {
                ...state
            }
    }
}