import React from 'react';

import { Route, Switch } from "react-router-dom";

import Header from "../header";
import { CartPage, HomePage } from "../pages";

const App = () => {
    return (
        <div className='container' >
            <Header />
            <Switch>
                <Route path='/' component={ HomePage } exact />
                <Route path='/cart-page' component={ CartPage } />
                <Route render={ () => <h2>404</h2> } />
            </Switch>
        </div>
    )
};

export default App;
