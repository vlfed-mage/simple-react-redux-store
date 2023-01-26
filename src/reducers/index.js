import * as actionTypes from '../action-types'
import initialState from "./initial-state";

const {
    BOOKS_LOADED,
    BOOKS_REQUESTED,
    BOOKS_ERROR
} = actionTypes;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOKS_REQUESTED:
            return {
                books: [],
                loading: true
            };
        case BOOKS_LOADED:
            return {
                books: action.payload,
                loading: false
            };
        case BOOKS_ERROR:
            return {
                books: [],
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
