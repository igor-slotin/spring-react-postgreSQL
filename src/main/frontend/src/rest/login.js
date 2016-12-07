import endpoints from '../endpoints';
import fetcher from 'fetcher'

export const loginRest = ({username, password}) => {
  return fetcher(`${endpoints}/api/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username, password})
  })
};