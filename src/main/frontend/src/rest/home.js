import endpoints from '../endpoints';

export const getCars = () => {
  return fetch(`${endpoints}/api/car`).then(res => {
    return res.json()
  })
};