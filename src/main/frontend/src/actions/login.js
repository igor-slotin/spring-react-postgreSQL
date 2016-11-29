import { SET_USERNAME, SET_PASSWORD, CHECK_USER, CHECK_USER_SUCCESS, CHECK_USER_FAILED } from '../constants/login';
import { loginRest } from '../rest/login';
import auth from '../services/auth'

export const setUsername = username => dispatch => {
  dispatch({
    type: SET_USERNAME,
    username
  })
};

export const setPassword = password => dispatch => {
  dispatch({
    type: SET_PASSWORD,
    password
  })
};

export const login = (username, password) => dispatch => {
  dispatch({
    type: CHECK_USER
  });

  loginRest({username, password}).then(data => {
    auth.set(data);
    dispatch({
      type: CHECK_USER_SUCCESS,
    })
  }).catch(e => {
    dispatch({
      type: CHECK_USER_FAILED
    })
  });
};