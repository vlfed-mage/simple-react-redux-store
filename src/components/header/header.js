import React from "react";

import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className='header d-flex'>
            <ul className='d-flex'>
                <li>
                    <NavLink to='/cart-page' >
                        cart page
                    </NavLink>
                </li>
            </ul>
        </header>
    )
};

export default Header;