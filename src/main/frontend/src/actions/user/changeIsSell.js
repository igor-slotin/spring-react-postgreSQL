import { changeIsSell } from '../../rest/user';
import auth from '../../services/auth';

export default carId => dispatch => {
  const userId = auth.get();
  if (userId == null || typeof userId == 'undefined') return;

  return changeIsSell(userId, carId);
}