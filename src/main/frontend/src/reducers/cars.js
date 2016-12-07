import { START_LOADING, LOADING_SUCCESS, POST_QUERY, BUYING_CAR_FAILD } from '../constants/home'
const initialState = {
  data: [],
  fetching: false,
  showCars: false,
  message: false,
  messageText: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, fetching: true };
    case LOADING_SUCCESS:
      return { ...state, data: action.payload.cars, fetching: false, showCars: action.payload.showCars };
    case BUYING_CAR_FAILD:
      return { ...state, message: true, messageText: action.message };
    case POST_QUERY:
      return { ...state, message: false, messageText: '' };

    default:
      return state;
  }
};