import { combineReducers } from 'redux';
import ecommerce from './commerce';
import auth from './auth';

export default combineReducers({
    ecommerce,
    auth
});