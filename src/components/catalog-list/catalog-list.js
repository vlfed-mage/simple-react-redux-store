import React from "react";

import CatalogListItem from "../catalog=list-item";
import { connect } from "react-redux";

const CatalogList = ({ books }) => {
    const bookList = books.map((book) => {
        const { id } = book;
        return (
            <li key={ id }>
                <CatalogListItem book={ book } />
            </li>
        );
    });

    return (
        <ul>
            { bookList }
        </ul>
    );
};

const mapStateToProps = ({ books }) => {
    return { books }
};

export default connect(mapStateToProps)(CatalogList);