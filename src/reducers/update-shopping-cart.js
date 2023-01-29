import {
    CART_ITEM_DELETE,
    CART_ITEM_INCREASE,
    CART_ITEM_DECREASE,
    BOOK_ADDED_TO_CART
} from "../action-types";

import checkID from "./helpers";

const updateCartTable = (state, action, sign = 1) => {
    const { bookList: { books }, shoppingCart: { cartTable, cartTotal } } = state;
    const book = books.find((book) => checkID(book, action));
    const { id, title, price } = book;
    const newCartTableItem = {
        count: 1,
        id,
        title,
        price,
    };

    return {
        cartTable: cartTable.some((r) => checkID(r, action))
            ? cartTable.map((r) => {
                if (checkID(r, action)) {
                    return { ...r, count: r.count + sign, price: r.price + sign * book.price };
                }
                return r;
            })
            : [ ...cartTable, newCartTableItem ],
        cartTotal: cartTotal + sign * book.price
    };
};

const removeCartItem = (state, action) => {
    const { shoppingCart: { cartTable, cartTotal } } = state;
    const removedRow = cartTable.filter((r) => action.payload === r.id);
    return {
        cartTable: cartTable.filter((r) => action.payload !== r.id),
        cartTotal: cartTotal - removedRow[0].price
    };
};

const updateShoppingCart = (state, action) => {
    switch (action.type) {
        case CART_ITEM_DELETE:
            return removeCartItem(state, action);
        case CART_ITEM_INCREASE:
            return updateCartTable(state, action);
        case CART_ITEM_DECREASE:
            return updateCartTable(state, action, -1);
        case BOOK_ADDED_TO_CART:
            return updateCartTable(state, action);
        default:
            return state.shoppingCart;
    }
};

export default updateShoppingCart;