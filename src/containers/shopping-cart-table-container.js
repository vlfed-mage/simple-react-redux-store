import React from 'react';
import { connect } from "react-redux";

import * as actions from '../actions';

import ShoppingCartTable from "../components/shopping-cart-table";

const ShoppingCartTableContainer = (props) => {
    return (
        <ShoppingCartTable shoppingCart={ props } />
    );
};

const mapStateToProps = ({ shoppingCart: { cartTable, cartTotal } }) => {
    return { cartTable, cartTotal }
};

export default connect(mapStateToProps, actions)(ShoppingCartTableContainer);
