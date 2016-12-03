import {START_LOADING, LOADING_SUCCESS, LOADING_FAILURE} from '../constants/home';
import {getCars} from '../rest/home';

export const loadCars = () => {
  return (dispatch) => {
    dispatch({
      type: START_LOADING
    });

    getCars().then(data => {
      let showCars;

      if(data.length == 0){
        showCars = false;
      }else if(data.length > 0){
        showCars = true;
      }
      dispatch({
        type: LOADING_SUCCESS,
        payload: {cars:data,showCars}
      });
    }, () => {
      dispatch({
        type: LOADING_FAILURE,
        payload: "Loading failed"
      });
    });
  }
};


