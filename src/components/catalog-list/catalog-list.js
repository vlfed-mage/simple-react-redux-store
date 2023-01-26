import React, { useContext } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";

import { fetchBooks } from "../../actions";

import CatalogListItem from "../catalog=list-item";
import LoaderIndicator from "../loader-indicator";
import ErrorIndicator from "../error-indicator";
import BookStoreServicesContext from "../bookstore-service-context";

const CatalogList = ({ books, loading, error, ...otherProps }) => {
    const { fetchBooks } = otherProps;

    useEffect(() => {
        fetchBooks();
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

const mapDispatchToProps = (dispatch, { getBooks }) => {
    // getBooks get from CatalogList component just for using ownProps instead of using useContext
    return {
        fetchBooks: fetchBooks(getBooks, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogList);
