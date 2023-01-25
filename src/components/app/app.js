import React from 'react';

import { Route, Switch } from "react-router-dom";

import Header from "../header";
import { CartPage, HomePage } from "../pages";
import ShoppingCartTable from "../shopping-cart-table";

const App = () => {
    return (
        <div className='container' >
            <Header numItems={ 5 } total={ 210 } />
            <Switch>
                <Route path='/' component={ HomePage } exact />
                <Route path='/cart-page' component={ CartPage } />
                <Route render={ () => <h2>404</h2> } />
            </Switch>
            <ShoppingCartTable />
        </div>
    )
};

export default App;