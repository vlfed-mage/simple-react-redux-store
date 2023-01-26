import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";

import { fetchBooks } from "../actions";

import LoaderIndicator from "../components/loader-indicator";
import ErrorIndicator from "../components/error-indicator";
import CatalogList from "../components/catalog-list";

const CatalogListContainer = ({ books, loading, error, ...otherProps }) => {
    const { fetchBooks } = otherProps;

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div className='catalog'>
            { loading && <LoaderIndicator /> }
            { error && <ErrorIndicator /> }
            { !loading && !error && <CatalogList books={ books }/> }
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

export default connect(mapStateToProps, mapDispatchToProps)(CatalogListContainer);
