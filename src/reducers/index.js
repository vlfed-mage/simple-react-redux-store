import * as actionTypes from '../action-types'

const initialState = {
    books: [],
    loading: true
};

const { BOOKS_LOADED } = actionTypes;

const reducer = (state = initialState, action) => {
    switch (action.type) {
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
