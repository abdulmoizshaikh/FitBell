import * as types from "./types";
import { Toast } from 'native-base';

let initialState = {
    open: false,
    message: "",
    type: 'success',
    duration: 3000
};

const snackbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_SNACKBAR:
            // console.log("SHOW_SNACKBAR", action.payload)
            Toast.show({
                text: action.payload.message,
                type: action.payload.type || state.type,
                duration: action.payload.duration || state.duration
            })
            return {
                open: true,
                message: action.payload.message,
                type: action.payload.type,
                duration: action.payload.duration || state.duration
            }
        default:
            return state;
    }
};

export default snackbarReducer;














// import * as types from "./types";

// let initialState = {
//     message: ''
// };

// const authReducer = (state = initialState, action) => {
//     switch (action.type) {

//         case types.SHOW_SNACKBAR:
//             return {
//                 ...state,
//                 message: action.payload
//             };

//         case types.HIDE_SNACKBAR:
//             return {
//                 ...state,
//                 message: action.payload
//             };

//         default: return state
//     }
// }

// export default snackbarReducer;
