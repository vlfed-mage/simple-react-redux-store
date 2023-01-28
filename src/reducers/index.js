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
            console.log('CART_ITEM_DELETE', action.payload)
            return {
                ...state,
                cartTable: state.cartTable.filter((row) => row.id !== action.payload)
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
            const bookId = action.payload,
            { books, cartTable } = state,
            condition = (item) => bookId === item.id,
            book = books.find((book) => condition(book)),
            newCartTableItem = {
                count: 1,
                id: book.id,
                title: book.title,
                price: book.price,
            },
            updatedCartTable = cartTable.some((r) => condition(r))
                ? cartTable.map((r) => condition(r) ? { ...r, count: r.count + 1, price: r.price + book.price } : r )
                : [ ...cartTable, newCartTableItem ];

            return {
                ...state,
                cartTable: updatedCartTable
            };
        default:
            return state;
    }
};

export default reducer;
