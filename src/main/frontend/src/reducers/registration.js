import {
  ACTIVE_QUERY,
  QUERY_FAILURE,
  QUERY_SUCCESS,
  CHANGE_PASSWORDS,
  CHANGE_USERNAME,
  CHANGE_PASSWORDS_FAILURE,
  POST_QUERY
} from '../constants/registration'

const initialState = {
  userId: null,
  fetching: false,
  message: false,
  messageText: '',
  username: '',
  password: '',
  confirmPassword: '',
  passwordFailure: null,
  signUpDisabled: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_QUERY:
      return { ...state, fetching: true };
    case QUERY_SUCCESS:
      return { ...state, userId: action.payload, fetching: false, message: true, messageText: 'User add' };
    case QUERY_FAILURE:
      return { ...state, userId: null, fetching: false, message: true, messageText: action.payload.message };
    case POST_QUERY:
      return { ...state, message: false, messageText: '' };
    case CHANGE_PASSWORDS:
      return {
        ...state,
        password: action.payload.password,
        confirmPassword: action.payload.confirmPassword,
        passwordFailure: null,
        signUpDisabled: false
      };
    case CHANGE_PASSWORDS_FAILURE:
      return {
        ...state,
        password: action.payload.password,
        confirmPassword: action.payload.confirmPassword,
        passwordFailure: 'Passwords do not match',
        signUpDisabled: true
      };
    case CHANGE_USERNAME:
      return { ...state, username: action.payload };
    default:
      return state;
  }
};