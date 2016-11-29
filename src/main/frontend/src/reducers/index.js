import {combineReducers} from 'redux'

import user from './user';
import cars from './cars';
import login from './login'

export default combineReducers({user, cars, login});