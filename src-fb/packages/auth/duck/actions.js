import * as types from "./types";





// Signup
export const signUpRequest = () => ({
    type: types.SIGNUP_REQUEST,
})

export const signUpSuccess = (data) => ({
    type: types.SIGNUP_SUCCESS,
    payload: data
});

export const signUpFailed = () => ({
    type: types.SIGNUP_FAILED
});





// Login
export const loginRequest = () => {
    return {
        type: types.LOGIN_REQUEST,
    }
};

export const loginSuccess = (data) => {
    return {
        type: types.LOGIN_SUCCESS,
        payload: data
    }
};

export const loginFailed = () => ({
    type: types.LOGIN_FAILED,
});











// forgot password
export const forgotPasswordRequest = () => ({
    type: types.FORGOT_PASSWORD_REQUEST,
})

export const forgotPasswordSuccess = () => ({
    type: types.FORGOT_PASSWORD_SUCCESS,
});

export const forgotPasswordFailed = () => ({
    type: types.FORGOT_PASSWORD_FAILED,
});


// verificationCode
export const verificationCode = (data) => ({
    type: types.VERIFICATION_CODE,
    payload: data
})


// validate verification code
export const validateVerificationCodeRequest = () => ({
    type: types.VALIDATE_VERIFICATION_CODE_REQUEST,
})

export const validateVerificationCodeSuccess = () => ({
    type: types.VALIDATE_VERIFICATION_CODE_SUCCESS,
});

export const validateVerificationCodeFailed = () => ({
    type: types.VALIDATE_VERIFICATION_CODE_FAILED,
});








// reset password
export const resetPasswordRequest = () => ({
    type: types.RESET_PASSWORD_REQUEST,
})

export const resetPasswordSuccess = () => ({
    type: types.RESET_PASSWORD_SUCCESS,
});

export const resetPasswordFailed = () => ({
    type: types.RESET_PASSWORD_FAILED,
});

export const saveToken = (data) => ({
    type: types.SAVE_TOKEN,
    payload: data
});

export const saveDeviceId = (data) => ({
    type: types.SAVE_DEVICE_ID,
    payload: data
});

export const unauthorize = () => ({
    type: types.UNAUTHORIZED_USER,
});
export const logout = () => ({
    type: types.LOGOUT,
});