import { snackbarActions } from './index';

const showSnackbar = (data) => (dispatch) => {
    dispatch(snackbarActions.showSnackbar(data))
};

const hideSnackbar = () => (dispatch) => {
    dispatch(snackbarActions.hideSnackbar())
};

export {
    showSnackbar,
    hideSnackbar
};

