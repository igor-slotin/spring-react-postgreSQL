import endpoints from '../endpoints';

export const getCars = () => {
  return fetch(`${endpoints}/api/car/all`).then(res => res.json())
};