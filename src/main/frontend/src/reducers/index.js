import {combineReducers} from 'redux'

import user from './user';
import cars from './cars';
import login from './login';
import registration from './registration';
import addCar from './add-car';


export default combineReducers({user, cars, login,registration,addCar});