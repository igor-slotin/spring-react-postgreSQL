import { combineReducers } from 'redux'

import user from './user';
import cars from './cars';

export default combineReducers({user, cars});