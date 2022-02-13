import {combineReducers} from 'redux';

// imports: Reducers
import AuthReducer from './Auth';
// import AppReducer from './App';

// Redux: Root Reducer
const rootReducer = combineReducers({
  //reducers will go here
  Auth: AuthReducer,
  // App: AppReducer,
});

// exports
export default rootReducer;
