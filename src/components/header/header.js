import React from "react";
import { connect } from "react-redux";

import { NavLink } from "react-router-dom";

const Header = ({ cartTable, cartTotal }) => {
    const numItems = cartTable.reduce((acc, curr) => {
        return acc + curr.count;
    }, 0);

    return (
        <header className="header d-flex">
            <NavLink to='/' className="logo text-dark" >
                Book Store
            </NavLink>
            <NavLink to='/cart-page' className="shopping-cart">
                <i className="cart-icon fa fa-shopping-cart" />
                { numItems } items ({ `$${ cartTotal }` })
            </NavLink>
        </header>
    )
};

const mapStateToProps = ({ shoppingCart: { cartTable, cartTotal } }) => {
    return { cartTable, cartTotal };
}

export default connect(mapStateToProps)(Header);
