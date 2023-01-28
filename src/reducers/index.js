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

const checkID = (item, action) => {
    return action.payload === item.id
};

const updateCartTable = (state, action, sign = 1) => {
    const { books, cartTable } = state;

    const book = books.find((book) => checkID(book, action)),
    { id, title, price } = book,
    newCartTableItem = {
        count: 1,
        id,
        title,
        price,
    };

    return cartTable.some((r) => checkID(r, action))
        ? cartTable.map((r) => {
            if (checkID(r, action)) {
                return { ...r, count: r.count + sign, price: r.price + sign * book.price };
            }
            return r;
        })
        : [ ...cartTable, newCartTableItem ];
};

const removeCartItem = (state, action) => {
    return state.cartTable.filter((r) => checkID(r, action))
}

const reducer = (state = initialState, action) => {
    const { books, cartTable } = state;

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
                cartTable: removeCartItem(state, action)
            };
        case CART_ITEM_INCREASE:
            return {
                ...state,
                cartTable: updateCartTable(state, action)
            };
        case CART_ITEM_DECREASE:
            return {
                ...state,
                cartTable: updateCartTable(state, action, -1)
            };
        case BOOK_ADDED_TO_CART:
            return {
                ...state,
                cartTable: updateCartTable(state, action)
            };
        default:
            return state;
    }
};

export default reducer;
