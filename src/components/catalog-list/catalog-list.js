import React from "react";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "../../actions";

import CatalogListItem from "../catalog=list-item";
import LoaderIndicator from "../loader-indicator";
import ErrorIndicator from "../error-indicator";

const CatalogList = ({ books, loading, error, ...otherProps }) => {
    const { booksRequested, fetchBooks } = otherProps;

    useEffect(() => {
        fetchBooks();
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
    const { booksLoader, booksRequested, booksError } = bindActionCreators(actions, dispatch);
    const { getBooks } = ownProps; // get from CatalogList component just for using ownProps instead of using useContext

    return {
        booksRequested,
        fetchBooks: () => {
            getBooks()
                .then((data) => booksLoader(data))
                .catch((error) => booksError(error));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogList);
