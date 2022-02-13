import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import rootReducer from '../reducers';
import { LOGOUT } from '../ActionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const appReducer = async (state, action) => {
    let newState = state;
  
    if (action.type === LOGOUT) {
      await AsyncStorage.clear();
      newState = {
          auth: {}
      };
    }
  
    return rootReducer(newState, action);
};

const configureStore = () => {
    return createStore(rootReducer, compose(applyMiddleware(reduxThunk)))
}

export default configureStore();