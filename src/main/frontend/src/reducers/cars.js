import {START_LOADING, LOADING_SUCCESS} from '../constants/home'
const initialState = {
  data: [],
  fetching: false,
  showCars:false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {...state, fetching: true};
    case LOADING_SUCCESS:
      return {...state, data: action.payload.cars, fetching: false ,showCars:action.payload.showCars};
    default:
      return state;
  }
};