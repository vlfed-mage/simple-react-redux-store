import * as actionTypes from '../action-types';

const {
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_FAILURE
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
    console.log('onDeleted: ', id);
},

onIncrease = (id) => {
    console.log('onIncreased: ', id);
},

onDecrease = (id) => {
    console.log('onDecreased: ', id);
};

export {
    fetchBooks,
    onDelete,
    onIncrease,
    onDecrease
};
