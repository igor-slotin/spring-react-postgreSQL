import endpoints from '../endpoints';

export const registrationRest = ({username, password}) => {
    return fetch(`${endpoints}/api/user/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    }).then(res => res.json())
};