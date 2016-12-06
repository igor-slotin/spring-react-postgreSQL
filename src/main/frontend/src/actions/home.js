import {
  START_LOADING,
  LOADING_SUCCESS,
  LOADING_FAILURE,
  BUYING_CAR_SUCCESS,
  BUYING_CAR_FAILD,
  POST_QUERY
} from '../constants/home';
import { getCars, byCar } from '../rest/home';
import auth from '../services/auth';

export const loadCars = () => dispatch => {
  dispatch({
    type: START_LOADING
  });

  getCars().then(data => {
    let showCars;

    if (data.length == 0) {
      showCars = false;
    } else if (data.length > 0) {
      showCars = true;
    }
    dispatch({
      type: LOADING_SUCCESS,
      payload: { cars: data, showCars }
    });
  }, () => {
    dispatch({
      type: LOADING_FAILURE,
      payload: "Loading failed"
    });
  });
};

export const buyingCar = carId => dispatch => {
  const userId = auth.get();
  if (userId == null || typeof userId == 'undefined') return;

  return byCar(userId, carId).then(() => {
    dispatch({
      type: BUYING_CAR_SUCCESS
    })
  }).catch(e => {
    dispatch({
      type: BUYING_CAR_FAILD,
      message: e.message
    });
    setTimeout(() => {
      dispatch({
        type: POST_QUERY
      });
    }, 3000)
  })
};


