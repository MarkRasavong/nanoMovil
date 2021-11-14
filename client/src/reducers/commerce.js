import { ADD_TO_CART, REFRESH_CART, DELETE_ITEM_FROM_CART, EMPTY_CART, FETCH_MOVILES, FETCH_TARIFAS, RETRIEVE_CART, UPDATE_ITEM_QTY } from '../constants';

const commerceReducer = (state = { tarifas: null, moviles: null, cart: null }, action) => {
    switch (action.type) {
        case FETCH_TARIFAS:
            return { ...state, tarifas: action.payload };
        case FETCH_MOVILES:
            return { ...state, moviles: action.payload };
        case RETRIEVE_CART:
        case UPDATE_ITEM_QTY:
        case DELETE_ITEM_FROM_CART:
        case ADD_TO_CART:
        case EMPTY_CART:
        case REFRESH_CART:
            return { ...state, cart: action.payload };
        default:
            return state
    }
}

export default commerceReducer;