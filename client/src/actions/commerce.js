import { commerce } from '../lib/commerce';
import { FETCH_MOVILES, FETCH_TARIFAS } from '../constants';

export const fetchTarifas = async distpach => {
    try {
        const { data } = await commerce.products.list({ category_slug: ['tarifas'] });
        distpach({ type: FETCH_TARIFAS, payload: data });
    } catch (err) {
        console.log(err);
    }
};

export const fetchMoviles = async dispatch => {
    try {
        const { data } = await commerce.products.list({ category_slug: ['moviles'] });
        dispatch({ type: FETCH_MOVILES, payload: data });
    } catch (err) {
        console.log(err);
    };
};

