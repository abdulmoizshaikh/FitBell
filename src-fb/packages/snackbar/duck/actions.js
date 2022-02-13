import * as types from "./types";



export const showSnackbar = (data) => ({
    type: types.SHOW_SNACKBAR,
    payload: data,
})

export const hideSnackbar = () => ({
    type: types.HIDE_SNACKBAR,
});

