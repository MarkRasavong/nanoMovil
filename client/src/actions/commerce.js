import { FETCH_TOP_MOVILES, ADD_TO_CART, DELETE_ITEM_FROM_CART, FETCH_MOVILES, FETCH_TARIFAS, EMPTY_CART, RETRIEVE_CART, UPDATE_ITEM_QTY } from '../constants';
import { commerce } from '../lib/commerce';

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

export const fetchTopMoviles = async dispatch => {
    try {
        const { data } = await commerce.products.list({
            category_slug: ['moviles'],
            limit: 3
        });
        dispatch({ type: FETCH_TOP_MOVILES, payload: data })
    } catch (err) {
        console.log(err);
    }
}

export const fetchCart = async (dispatch) => {
    try {
        const items = await commerce.cart.retrieve();
        dispatch({ type: RETRIEVE_CART, payload: items });
    } catch (err) {
        console.log(err);
    };
};

export const addProductToCart = async (productId, quanitity, dispatch) => {
    try {
        const item = await commerce.cart.add(productId, quanitity);
        dispatch({ type: ADD_TO_CART, payload: item.cart });
    } catch (err) {
        console.log(err);
    }
};

export const removeItemfromCart = async (productId, dispatch) => {
    try {
        const { cart } = await commerce.cart.remove(productId);
        dispatch({ type: DELETE_ITEM_FROM_CART, payload: cart })
    } catch (err) {
        console.log(err);
    };
};

export const emptyCart = async (dispatch) => {
    try {
        const { cart } = await commerce.cart.empty();
        dispatch({ type: EMPTY_CART, payload: cart });
    } catch (err) {
        console.log(err);
    };
};

export const updateItemQty = async (productId, quantity, dispatch) => {
    try {
        const { cart } = await commerce.cart.update(productId, { quantity });
        dispatch({ type: UPDATE_ITEM_QTY, payload: cart })
    } catch (err) {
        console.log(err);
    };
};