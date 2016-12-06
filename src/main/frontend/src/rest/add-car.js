import endpoints from '../endpoints';
import auth from  '../services/auth.js';
const userId = auth.get();

export const addCarRest = (query) => {
    return fetch(`${endpoints}/api/car/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(query)
    }).then(res => res.json())
};