import React from "react";

const CatalogListItem = ({ book }) => {
    const { title, author } = book;

    return (
        <>
            <span>{ title }</span>
            <span>{ author }</span>
        </>
    )
};

export default CatalogListItem