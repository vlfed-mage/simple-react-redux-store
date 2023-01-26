import * as actionTypes from '../action-types';

const {
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_FAILURE
} = actionTypes;

const booksLoader = (newBooks) => {
    return {
        type: FETCH_BOOKS_SUCCESS,
        payload: newBooks
    }
}

const booksRequested = () => {
    return {
        type: FETCH_BOOKS_REQUEST,
    }
}

const booksError = (error) => {
    return {
        type: FETCH_BOOKS_FAILURE,
        payload: error
    }
}

const fetchBooks = (getBooks, dispatch) => () => {
    dispatch(booksRequested());
    getBooks()
        .then((data) => dispatch(booksLoader(data)))
        .catch((error) => dispatch(booksError(error)));
}

export {
    fetchBooks
};
