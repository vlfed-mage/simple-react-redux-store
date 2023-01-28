import * as actionTypes from '../action-types';

const {
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_FAILURE,
    CART_ITEM_DELETE,
    CART_ITEM_INCREASE,
    CART_ITEM_DECREASE,
    BOOK_ADDED_TO_CART
} = actionTypes,

booksLoader = (newBooks) => {
    return {
        type: FETCH_BOOKS_SUCCESS,
        payload: newBooks
    }
},

booksRequested = () => {
    return {
        type: FETCH_BOOKS_REQUEST,
    }
},

booksError = (error) => {
    return {
        type: FETCH_BOOKS_FAILURE,
        payload: error
    }
},

fetchBooks = (getBooks, dispatch) => () => {
    dispatch(booksRequested());
    getBooks()
        .then((data) => dispatch(booksLoader(data)))
        .catch((error) => dispatch(booksError(error)));
},

onDelete = (id) => {
    return {
        type: CART_ITEM_DELETE,
        payload: id
    }
},

onIncrease = (id) => {
    return {
        type: CART_ITEM_INCREASE,
        payload: id
    }
},

onDecrease = (id) => {
    return {
        type: CART_ITEM_DECREASE,
        payload: id
    }
},

onAddedToCart = (id) => {
    return {
        type: BOOK_ADDED_TO_CART,
        payload: id
    }
};

export {
    fetchBooks,
    onDelete,
    onIncrease,
    onDecrease,
    onAddedToCart
};
