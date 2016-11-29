import { SET_USERNAME, SET_PASSWORD, CHECK_USER, CHECK_USER_SUCCESS, CHECK_USER_FAILED } from '../constants/login';

const initialState = {
  username: '',
  password: '',
  isValid: true
};

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_USERNAME:
      return {...state, username: action.username};
    case SET_PASSWORD:
      return {...state, password: action.password};
    case CHECK_USER:
      return {...state, fetching: true};
    case CHECK_USER_SUCCESS:
      return {...state, isValid: true, fetching: false};
    case CHECK_USER_FAILED: {
      return {...state, isValid: false, fetching: false}
    }
    default:
      return state;
  }
}