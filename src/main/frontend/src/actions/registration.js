import { hashHistory } from 'react-router';

import {
  ACTIVE_QUERY,
  QUERY_FAILURE,
  QUERY_SUCCESS,
  CHANGE_PASSWORDS,
  CHANGE_USERNAME,
  CHANGE_PASSWORDS_FAILURE,
  POST_QUERY
} from '../constants/registration';
import auth from '../services/auth'
import { registrationRest } from '../rest/registration';

export const registration = (username, password) => dispatch => {
  dispatch({
    type: ACTIVE_QUERY
  });

  registrationRest(username, password).then(data => {
    auth.set(data);
    hashHistory.push('/user');
    dispatch({
      type: QUERY_SUCCESS,
      payload: data
    })
  }).catch((e) => {
    dispatch({
      type: QUERY_FAILURE,
      payload: e
    });
    setTimeout(() => {
      dispatch({
        type: POST_QUERY
      })
    }, 3000)
  });
};

export const inputPasswords = (password, confirmPassword) => dispatch => {
  if (password == confirmPassword) {
    dispatch({
      type: CHANGE_PASSWORDS,
      payload: { password, confirmPassword }
    });
  } else {
    dispatch({
      type: CHANGE_PASSWORDS_FAILURE,
      payload: { password, confirmPassword }
    });
  }
};

export const inputUsername = username => dispatch => {
  dispatch({
    type: CHANGE_USERNAME,
    payload: username
  });
};