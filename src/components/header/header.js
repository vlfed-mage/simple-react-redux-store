import React from "react";

import { NavLink } from "react-router-dom";

const Header = ({ numItems, total }) => {
    return (
        <header className="header d-flex">
            <NavLink to='/' className="logo text-dark" >
                Book Store
            </NavLink>
            <NavLink to='/cart-page' className="shopping-cart">
                <i className="cart-icon fa fa-shopping-cart" />
                {numItems} items (${total})
            </NavLink>
        </header>
    )
};

export default Header;