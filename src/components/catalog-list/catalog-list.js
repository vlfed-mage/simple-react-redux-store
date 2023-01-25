import React from "react";
import { useContext, useEffect } from "react";

import CatalogListItem from "../catalog=list-item";
import { connect } from "react-redux";
import BookStoreServicesContext from "../bookstore-service-context";
import { booksLoader } from "../../actions";

const CatalogList = ({ books, booksLoader }) => {
    const { getBooks } = useContext(BookStoreServicesContext);

    useEffect(() => {
        booksLoader(getBooks());
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
        <ul className="catalog-list">
            { bookList }
        </ul>
    );
};

const mapStateToProps = ({ books }) => {
    return { books }
};

export default connect(mapStateToProps, { booksLoader })(CatalogList);