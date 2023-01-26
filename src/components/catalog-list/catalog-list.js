import React from "react";
import { useContext, useEffect } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

import CatalogListItem from "../catalog=list-item";
import BookStoreServicesContext from "../bookstore-service-context";
import LoaderIndicator from "../loader-indicator";
import ErrorIndicator from "../error-indicator";

const CatalogList = ({ books, loading, error, ...otherProps }) => {
    const { getBooks } = useContext(BookStoreServicesContext),
        { booksLoader, booksRequested, booksError } = otherProps;

    useEffect(() => {
        getBooks()
            .then((data) => booksLoader(data))
            .catch((error) => booksError(error));
        return () => booksRequested();
    }, []);

    const bookList = books.map((book) => {
        const { id } = book;
        return (
            <li key={ id }>
                <CatalogListItem book={ book } />
            </li>
        );
    });

    return (
        <div className='catalog'>
            { loading && <LoaderIndicator /> }
            { error && <ErrorIndicator /> }
            { !loading && !error &&
                <ul className="catalog-list">
                    { bookList }
                </ul>
            }
        </div>
    );
};

const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { booksLoader, booksRequested, booksError } = actions
    return {
        booksLoader: (newBooks) => dispatch(booksLoader(newBooks)),
        booksRequested: () => dispatch(booksRequested()),
        booksError: (error) => dispatch(booksError(error)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogList);
