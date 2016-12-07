import endpoints from '../endpoints';
import fetcher from 'fetcher'

export const getUserData = userId => fetcher(`${endpoints}/api/user/${userId}`);

export const changeIsSell = (userId, carId) => {
  return fetcher(`${endpoints}/api/car/${userId}/${carId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
  });
};

export const increaseBalance = (userId, summ) => {
  return fetch(`${endpoints}/api/account/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      balance: summ
    })
  });
};