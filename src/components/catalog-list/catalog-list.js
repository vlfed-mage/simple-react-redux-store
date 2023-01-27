import React from "react";

import CatalogListItem from "../catalog=list-item";

const CatalogList = ({ books, onAddedToCart }) => {

    const bookList = books.map((book) => {
        const { id } = book;
        return (
            <li key={ id }>
                <CatalogListItem
                    book={ book }
                    onAddedToCart={ () => onAddedToCart(id) } />
            </li>
        );
    });

    return (
        <ul className="catalog-list">
            { bookList }
        </ul>
    );
};

export default CatalogList;
