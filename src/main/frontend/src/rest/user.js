import endpoints from '../endpoints';

export const getUserData = userId => {
  return fetch(`${endpoints}/api/user/${userId}`).then(res => res.json())
};

export const changeIsSell = (userId, carId) => {
  return fetch(`${endpoints}/api/car/${userId}/${carId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
  })
};

export const increaseBalance = (userId, summ) => {
  return fetch(`${endpoints}/api/account/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      balance: "" + summ
    })
  })
};