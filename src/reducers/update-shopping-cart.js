import {
    CART_ITEM_DELETE,
    CART_ITEM_INCREASE,
    CART_ITEM_DECREASE,
    BOOK_ADDED_TO_CART
} from "../action-types";

import checkID from "./helpers";

const updateCartTable = (state, action, sign = 1) => {
    const { bookList: { books }, shoppingCart: { cartTable } } = state;
    const book = books.find((book) => checkID(book, action));
    const { id, title, price } = book;
    const newCartTableItem = {
        count: 1,
        id,
        title,
        price,
    };

    return cartTable.some((r) => checkID(r, action))
        ? cartTable.map((r) => {
            if (checkID(r, action)) {
                return { ...r, count: r.count + sign, price: r.price + sign * book.price };
            }
            return r;
        })
        : [ ...cartTable, newCartTableItem ];
};

const removeCartItem = (state, action) => {
    const { shoppingCart: { cartTable } } = state;
    return cartTable.filter((r) => action.payload !== r.id);
};

const updateShoppingCart = (state, action) => {
    switch (action.type) {
        case CART_ITEM_DELETE:
            return {
                cartTable: removeCartItem(state, action),
                cartTotal: 0
            };
        case CART_ITEM_INCREASE:
            return {
                cartTable: updateCartTable(state, action),
                cartTotal: 0
            };
        case CART_ITEM_DECREASE:
            return {
                cartTable: updateCartTable(state, action, -1),
                cartTotal: 0
            };
        case BOOK_ADDED_TO_CART:
            return {
                cartTable: updateCartTable(state, action),
                cartTotal: 0
            };
        default:
            return state.shoppingCart;
    }
};

export default updateShoppingCart;