import * as actionTypes from '../action-types'
import initialState from "./initial-state";

const {
    BOOKS_LOADED,
    BOOKS_REQUESTED,
} = actionTypes;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOKS_REQUESTED:
            return {
                books: [],
                loading: true
            }
        case BOOKS_LOADED:
            return {
                books: action.payload,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;
