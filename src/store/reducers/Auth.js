import {AuthActions} from '../actions/';
const INITIAL_STATE = {
  isLoading: false,
  buttonLoading: false,
  signupData: {},
  user: {},
  interests: [],
  token: '',
};

function Reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AuthActions.GET_TOKEN:
      return {...state, token: action.payload};

    case AuthActions.LOGIN:
      return {...state, isLoading: true};
    case AuthActions.LOGIN_SUCCESS:
      return {...state, user: action.payload, isLoading: false};
    case AuthActions.LOGIN_FAIL:
      return {...state, isLoading: false};

    default:
      return state;
  }
}

export default Reducer;
