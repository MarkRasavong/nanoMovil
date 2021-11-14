import { FETCH_MOVILES, FETCH_TARIFAS } from '../constants';

const commerceReducer = (state = { tarifas: null, moviles: null }, action) => {
    switch (action.type) {
        case FETCH_TARIFAS:
            return { ...state, tarifas: action.payload };
        case FETCH_MOVILES:
            return { ...state, moviles: action.payload };
        default:
            return state
    }
}

export default commerceReducer;