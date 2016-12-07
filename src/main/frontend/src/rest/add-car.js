import endpoints from '../endpoints';
import fetcher from 'fetcher';

export const addCarRest = (query, userId) => {
  return fetcher(`${endpoints}/api/car/${userId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(query)
  })
};