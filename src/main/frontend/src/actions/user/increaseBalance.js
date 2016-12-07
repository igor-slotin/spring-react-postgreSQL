import { increaseBalance } from '../../rest/user';
import auth from '../../services/auth';

export default summ => dispatch => {
  const userId = auth.get();
  if (userId == null || typeof userId == 'undefined') return;

  return increaseBalance(userId, summ);
}