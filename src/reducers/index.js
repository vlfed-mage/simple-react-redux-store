import * as actionTypes from '../action-types'
import initialState from "./initial-state";

const {
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_FAILURE,
    CART_ITEM_DELETE,
    CART_ITEM_INCREASE,
    CART_ITEM_DECREASE,
    BOOK_ADDED_TO_CART
} = actionTypes;

const reducer = (state = initialState, action) => {
    console.log(action.type);

    switch (action.type) {
        case FETCH_BOOKS_REQUEST:
            return {
                ...state,
                books: [],
                loading: true
            };
        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                books: action.payload,
                loading: false
            };
        case FETCH_BOOKS_FAILURE:
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };
        case CART_ITEM_DELETE:
            return {
                ...state
            };
        case CART_ITEM_INCREASE:
            return {
                ...state
            };
        case CART_ITEM_DECREASE:
            return {
                ...state
            };
        case BOOK_ADDED_TO_CART:
            const book = state.books.find((book) => action.payload === book.id);
            const newCartItem = {
                id: book.id,
                title: book.title,
                count: 1,
                price: book.price,
            };
            return {
                ...state,
                cartTable: [
                    ...state.cartTable,
                    newCartItem
                ]
            };
        default:
            return state;
    }
};

export default reducer;
