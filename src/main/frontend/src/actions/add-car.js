import { hashHistory } from 'react-router';

import {
  ACTIVE_QUERY,
  QUERY_FAILURE,
  QUERY_SUCCESS,
  POST_QUERY,
  CHANGE_COLOR,
  CHANGE_MODEL,
  CHANGE_PRICE,
  CHANGE_YEAR
} from '../constants/add-car';
import { addCarRest } from '../rest/add-car';
import auth from '../services/auth';

export const addCar = query => dispatch => {
  const userId = auth.get();
  if (userId == null || typeof userId == 'undefined') return;

  dispatch({
    type: ACTIVE_QUERY
  });

  addCarRest(query, userId).then((data) => {
    dispatch({
      type: QUERY_SUCCESS,
      payload: data
    });
    setTimeout(() => {
      hashHistory.push('/login');
      dispatch({
        type: POST_QUERY
      });
    }, 1000)

  }).catch(e => {
    dispatch({
      type: QUERY_FAILURE,
      payload: e
    });

    setTimeout(() => {
      dispatch({
        type: POST_QUERY
      });
    }, 3000)
  });
};


export const changeModel = value => dispatch=> {
  dispatch({
    type: CHANGE_MODEL,
    payload: value
  });
};

export const changeYear = value => dispatch => {
  dispatch({
    type: CHANGE_YEAR,
    payload: value
  });
};

export const changeColor = value => dispatch => {
  dispatch({
    type: CHANGE_COLOR,
    payload: value
  });
};

export const changePrice = value => dispatch => {
  dispatch({
    type: CHANGE_PRICE,
    payload: value
  });
};