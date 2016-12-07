import {
  ACTIVE_QUERY,
  QUERY_FAILURE,
  QUERY_SUCCESS,
  POST_QUERY,
  CHANGE_COLOR,
  CHANGE_MODEL,
  CHANGE_PRICE,
  CHANGE_YEAR
} from '../constants/add-car'

const initialState = {
  model: '',
  price: 0,
  color: '',
  year: 2016,
  message: false,
  messageText: '',
  fetching: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_QUERY:
      return { ...state, fetching: true };
    case QUERY_SUCCESS:
      return { ...state, userId: action.payload, fetching: false, message: true, messageText: 'Car add' };
    case QUERY_FAILURE:
      return { ...state, userId: null, fetching: false, message: true, messageText: action.payload.message };
    case POST_QUERY:
      return { ...state, message: false };
    case CHANGE_COLOR:
      return { ...state, color: action.payload };
    case CHANGE_MODEL:
      return { ...state, model: action.payload };
    case CHANGE_PRICE:
      return { ...state, price: action.payload };
    case CHANGE_YEAR:
      return { ...state, year: action.payload };
    default:
      return state;
  }
};