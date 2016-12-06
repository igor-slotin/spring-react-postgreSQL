import endpoints from '../endpoints';
import fetcher from 'fetcher';

export const getCars = () => {
  return fetcher(`${endpoints}/api/car`);
};

export const byCar = (userId, carId) => {
  return fetcher(`${endpoints}/api/purchase/${userId}/${carId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
};