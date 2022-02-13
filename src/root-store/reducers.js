import { combineReducers } from 'redux';
import snackbarReducer from '../packages/snackbar/duck';
import authReducers from "../packages/auth/duck/reducers";
import accountReducer from '../packages/account/duck/reducers';
import productsReducer from "../packages/products/duck/reducers";
import orderReducer from "../packages/orders/duck/reducers";

const rootReducer = combineReducers({
  snackbar: snackbarReducer,
  auth: authReducers,
  account: accountReducer,
  products: productsReducer,
  order: orderReducer
});

export default rootReducer;