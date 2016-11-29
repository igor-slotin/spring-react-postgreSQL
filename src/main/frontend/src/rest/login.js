import endpoints from '../endpoints';

export const loginRest = ({username, password}) => {
  return fetch(`${endpoints}/api/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username, password})
  }).then(res => res.json())
};