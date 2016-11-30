import { combineReducers } from 'redux'

import user from './user';
import cars from './cars';
import registration from './registration';


export default combineReducers({user, cars ,registration});