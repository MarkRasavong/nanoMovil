import { AUTH } from '../constants';

export const signin = (formData, nav) => async dispatch => {
    try {
        await dispatch({ type: AUTH, data: formData })
        nav('/');
    } catch (err) {
        console.log(err);
    }
};

export const register = (formData, nav) => async dispatch => {
    try {
        await dispatch({ type: AUTH, data: formData });
        nav('/');
    } catch (err) {
        console.log(err);
    };
};