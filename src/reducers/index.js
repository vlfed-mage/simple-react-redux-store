import actionTypes from '../action-types'

const initialState = {
    books: []
};

const { BOOKS_LOADED } = actionTypes;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOKS_LOADED:
            return { ...state, books: action.payload };
        default:
            return state;
    }
};

export default reducer