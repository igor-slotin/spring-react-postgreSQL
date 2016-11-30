import { ACTIVE_QUERY , QUERY_FAILURE ,QUERY_SUCCESS ,CHANGE_PASSWORDS,CHANGE_USERNAME,CHANGE_PASSWORDS_FAILURE,POST_QUERY } from '../constants/registration';
import endpoints from '../endpoints';
import auth from '../services/auth'
import {hashHistory} from 'react-router';

export function registration(username,password) {
    return dispatch => {
        dispatch({
            type: ACTIVE_QUERY
        });

        fetch(`${endpoints}/api/user/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        }).then(res => {
            res.json().then((data) => {

                if(data.status){
                    dispatch({
                        type: QUERY_FAILURE,
                        payload: data
                    })
                }else{
                    auth.set(data);
                    hashHistory.push('/user');
                    dispatch({
                        type: QUERY_SUCCESS,
                        payload: data
                    })
                }

            }).then(()=>{
                setTimeout(()=>{
                    dispatch({
                        type: POST_QUERY
                    })
                }, 3000)

            });

        })
    }
}

export function inputPasswords(password,confirmPassword) {
    return dispatch => {
        if(password == confirmPassword){
            dispatch({
                type: CHANGE_PASSWORDS,
                payload:{password,confirmPassword}
            });
        }else{
            dispatch({
                type: CHANGE_PASSWORDS_FAILURE,
                payload:{password,confirmPassword}
            });
        }
    }
}

export function inputUsername(username) {
    return dispatch => {
        dispatch({
            type: CHANGE_USERNAME,
            payload:username
        });
    }
}
