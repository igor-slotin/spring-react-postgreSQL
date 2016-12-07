import {
  START_LOADING_USER_DATA,
  USER_DATA_LOADED,
  USER_DATA_LOAD_FAIL
} from '../constants/user';
const initialState = {
  loading: false,
  data: {
    cars: [],
    account: {
      balance: 0
    }
  },
  isSellUpdated: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING_USER_DATA:
      return { ...state, loading: true };
    case USER_DATA_LOADED:
      return { ...state, loading: false, data: action.data };
    case USER_DATA_LOAD_FAIL:
      return { ...state, loading: false };
    default:
      return state
  }
};