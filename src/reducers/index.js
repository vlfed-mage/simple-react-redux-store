import * as actionTypes from '../action-types'
import initialState from "./initial-state";

const {
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_FAILURE
} = actionTypes;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS_REQUEST:
            return {
                books: [],
                loading: true
            };
        case FETCH_BOOKS_SUCCESS:
            return {
                books: action.payload,
                loading: false
            };
        case FETCH_BOOKS_FAILURE:
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
