import { AUTH } from '../constants';
import * as api from '../api';

export const signin = (formData, nav) => async dispatch => {
    try {
        const { data } = await api.signinUser(formData);
        dispatch({ type: AUTH, data })
        nav('/');
    } catch (err) {
        console.log(err);
    }
};

export const register = (formData, nav) => async dispatch => {
    try {
        const { data } = await api.registerUser(formData);
        dispatch({ type: AUTH, data });
        nav('/');
    } catch (err) {
        console.log(err);
    };
};