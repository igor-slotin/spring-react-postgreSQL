import auth from '../../services/auth';
import {hashHistory} from 'react-router';

export default () => dispatch => {
  if (auth.isEmpty()) hashHistory.push('/login');
}