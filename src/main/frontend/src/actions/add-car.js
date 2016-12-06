import {
    ACTIVE_QUERY,
    QUERY_FAILURE,
    QUERY_SUCCESS,
    POST_QUERY,
    CHANGE_COLOR,
    CHANGE_MODEL,
    CHANGE_PRICE,
    CHANGE_YEAR
} from '../constants/add-car';
import {addCarRest} from '../rest/add-car';

export function addCar(query) {
   return dispatch => {
       dispatch({
           type: ACTIVE_QUERY
       });

       addCarRest(query).then((data)=> {
           if (data.status) {
               dispatch({
                   type: QUERY_FAILURE,
                   payload: data
               });
           } else {
               dispatch({
                   type: QUERY_SUCCESS,
                   payload: data
               });
           }
       }).then(()=> {
           setTimeout(()=> {
               dispatch({
                   type: POST_QUERY
               });
           }, 3000)
       });
   }
}


export function changeModel(value) {
    return dispatch => {
        dispatch({
            type: CHANGE_MODEL,
            payload:value
        });
    };
}

export function changeYear(value) {
    return dispatch => {
        dispatch({
            type: CHANGE_YEAR,
            payload:value
        });
    };
}

export function changeColor(value) {
    return dispatch => {
        dispatch({
            type: CHANGE_COLOR,
            payload:value
        });
    };
}

export function changePrice(value) {
    return dispatch => {
        dispatch({
            type: CHANGE_PRICE,
            payload:value
        });
    };
}
