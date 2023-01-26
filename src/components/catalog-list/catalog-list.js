import React from "react";
import { useContext, useEffect } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

import CatalogListItem from "../catalog=list-item";
import BookStoreServicesContext from "../bookstore-service-context";
import LoaderIndicator from "../loader-indicator";
import ErrorIndicator from "../error-indicator";

const CatalogList = ({ books, loading, error, ...actions }) => {
    const { getBooks } = useContext(BookStoreServicesContext),
    { booksLoader, booksRequested, booksError } = actions,

    bookList = books.map((book) => {
        const { id } = book;
        return (
            <li key={ id }>
                <CatalogListItem book={ book } />
            </li>
        );
    });

    useEffect(() => {
        getBooks()
            .then((data) => booksLoader(data))
            .catch((error) => booksError(error));
        return () => booksRequested();
    }, []);

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

export default connect(mapStateToProps, actions)(CatalogList);
