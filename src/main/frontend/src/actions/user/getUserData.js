import auth from '../../services/auth'
import { getUserData } from '../../rest/user';
import { START_LOADING_USER_DATA, USER_DATA_LOADED, USER_DATA_LOAD_FAIL } from '../../constants/user';

export default () => dispatch => {
  dispatch({
    type: START_LOADING_USER_DATA
  });
  getUserData(auth.get()).then(data => {
    dispatch({
      type: USER_DATA_LOADED,
      data
    });
  }).catch(e => {
    dispatch({
      type: USER_DATA_LOAD_FAIL
    });
  })
}