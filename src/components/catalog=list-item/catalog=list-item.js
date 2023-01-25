import React from "react";

const CatalogListItem = ({ book }) => {
    const { title, author, price, coverImage } = book;
    return (
        <div className="catalog-item">
            <div className="catalog-item-cover">
                <img src={ coverImage } alt="cover" />
            </div>
            <div className="catalog-item-details">
                <a href="#" className="catalog-item-title">{ title }</a>
                <div className="catalog-item-author">{ author }</div>
                <div className="catalog-item-price">${ price }</div>
                <button className="btn btn-info add-to-cart">Add to cart</button>
            </div>
        </div>
    );
};

export default CatalogListItem