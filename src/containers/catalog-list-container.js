import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";

import { fetchBooks, onAddedToCart } from "../actions";

import LoaderIndicator from "../components/loader-indicator";
import ErrorIndicator from "../components/error-indicator";
import CatalogList from "../components/catalog-list";

const CatalogListContainer = ({ books, loading, error, ...actions }) => {
    const { fetchBooks, onAddedToCart } = actions;

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div className='catalog'>
            { loading && <LoaderIndicator /> }
            { error && <ErrorIndicator /> }

            { !loading && !error &&
                <CatalogList
                    books={ books }
                    onAddedToCart={ onAddedToCart } />
            }
        </div>
    );
};

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
    return { books, loading, error }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { getBooks } = ownProps; // getBooks get from CatalogList component
                                   // just for using ownProps instead of using useContext
    return {
        fetchBooks: fetchBooks(getBooks, dispatch),
        onAddedToCart: (id) => dispatch(onAddedToCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogListContainer);
