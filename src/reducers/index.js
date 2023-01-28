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
    const { books, cartTable, cartTotal } = state;

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
                ...state,
                cartTable: cartTable.filter((r) => r.id !== action.payload)
            };
        case CART_ITEM_INCREASE:
            return {
                ...state,
                cartTable: cartTable.map((r) => r.id === action.payload ? { ...r, count: r.count + 1 } : r)
            };
        case CART_ITEM_DECREASE:
            return {
                ...state,
                cartTable: cartTable.map((r) => r.id === action.payload ? { ...r, count: r.count - 1 } : r)
            };
        case BOOK_ADDED_TO_CART:
            const condition = (item) => action.payload === item.id,
            book = books.find((book) => condition(book)),
            { id, title, price } = book,
            newCartTableItem = {
                count: 1,
                id,
                title,
                price,
            },
            updatedCartTable = cartTable.some((r) => condition(r))
                ? cartTable.map((r) => condition(r) ? { ...r, count: r.count + 1, price: r.price + price } : r )
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
