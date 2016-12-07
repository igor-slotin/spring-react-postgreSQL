import endpoints from '../endpoints';
import fetcher from 'fetcher';

export const registrationRest = (username, password) => {
  return fetcher(`${endpoints}/api/user/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });
};