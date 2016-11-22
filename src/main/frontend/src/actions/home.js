import { START_LOADING, LOADING_SUCCESS } from '../constants/home';
import endpoints from '../endpoints';

export function getCars() {
    return dispatch => {
        dispatch({
            type: START_LOADING
        });

        fetch(`${endpoints}/api/car/all`).then(res => {
            res.json().then( (data) => {
                dispatch({
                    type: LOADING_SUCCESS,
                    payload: data
                });
            })
        });
    }
}
