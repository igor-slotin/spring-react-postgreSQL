import { START_LOADING, LOADING_SUCCESS, LOADING_FAILURE } from '../constants/home';
import { getCars } from '../rest/home';

export const loadCars = () => {
    return (dispatch)=> {
        dispatch({
            type: START_LOADING
        });

        getCars().then(data => {
            dispatch({
                type: LOADING_SUCCESS,
                payload: data
            });
        }, () => {
            dispatch({
                type: LOADING_FAILURE,
                payload: "Loading failed"
            });
        });
    }
};


