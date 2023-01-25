import React from "react";

import CatalogListItem from "../catalog=list-item";

const CatalogList = ({ books }) => {
    const bookList = books.map((book) => {
        return (
            <li>
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

export default CatalogList;