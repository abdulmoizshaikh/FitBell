import * as types from "./types";

let initialState = {
    token: "",
    isFetching: false,
    verificationCode: "",
    deviceId: ""
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {


        // Signup reducers
        case types.SIGNUP_REQUEST:
            return {
                ...state,
                isFetching: true
            };

        case types.SIGNUP_SUCCESS:
            return {
                ...state,
                isFetching: false,
                token: action.payload.access_token
            };

        case types.SIGNUP_FAILED:
            return {
                ...state,
                isFetching: false
            };




        // Login Reducers
        case types.LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true
            };

        case types.LOGIN_SUCCESS:
        return {
                ...state,
                isFetching: false,
                token: action.payload.access_token
            };

        case types.LOGIN_FAILED:
            return {
                ...state,
                isFetching: false
            };





        // forgot password
        case types.FORGOT_PASSWORD_REQUEST:
            return {
                ...state,
                isFetching: true
            };

        case types.FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                isFetching: false,
            };

        case types.FORGOT_PASSWORD_FAILED:
            return {
                ...state,
                isFetching: false
            };



        // VERIFICATION_CODE
        case types.VERIFICATION_CODE:
            return {
                ...state,
                verificationCode: action.payload
            }


        // VALIDATE VERIFICATION CODE 
        case types.VALIDATE_VERIFICATION_CODE_REQUEST:
            return {
                ...state,
                isFetching: true
            };

        case types.VALIDATE_VERIFICATION_CODE_SUCCESS:
            return {
                ...state,
                isFetching: false,
            };

        case types.VALIDATE_VERIFICATION_CODE_FAILED:
            return {
                ...state,
                isFetching: false
            };

        // RESET password   //CHANGE PASS
        case types.RESET_PASSWORD_REQUEST:
            return {
                ...state,
                isFetching: true
            };

        case types.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                isFetching: false,
            };

        case types.RESET_PASSWORD_FAILED:
            return {
                ...state,
                isFetching: false
            };

        case types.LOGOUT:
            return {
                ...state,
                token: ""
            };

        case types.UNAUTHORIZED_USER:
            return { ...initialState, token: null };

        case types.SAVE_DEVICE_ID:
            return { ...state, deviceId: action.payload };

        case types.SAVE_TOKEN:
            return { ...state, token: action.payload.data };

        default: return state
    }
}

export default authReducer;