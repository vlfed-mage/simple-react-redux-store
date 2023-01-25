import React from "react";
import { useContext, useEffect } from "react";

import CatalogListItem from "../catalog=list-item";
import { connect } from "react-redux";
import BookStoreServicesContext from "../bookstore-service-context";
import * as actions from "../../actions";
import LoaderIndicator from "../loader-indicator";

const CatalogList = ({ books, loading, ...actions }) => {
    const { getBooks } = useContext(BookStoreServicesContext),
    { booksLoader, booksRequested } = actions;

    useEffect(() => {
        booksRequested();
        getBooks()
            .then((data) => booksLoader(data));
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
            { !loading &&
                <ul className="catalog-list">
                    { bookList }
                </ul>
            }
        </div>
    );
};

const mapStateToProps = ({ books, loading }) => {
    return { books, loading }
};

export default connect(mapStateToProps, actions)(CatalogList);
