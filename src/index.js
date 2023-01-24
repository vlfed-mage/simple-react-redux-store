import './scss/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app";
import ErrorBoundary from "./components/error-boundary";
import BookStoreServicesContext from "./components/bookstore-service-context";

import store from "./store";
import bookstoreService from "./services";

const bookStoreService = bookstoreService();

ReactDOM.render(
    <Provider store={ store } >
        <ErrorBoundary>
            <BookStoreServicesContext.Provider value={ bookStoreService }>
                <Router>
                    <App />
                </Router>
            </BookStoreServicesContext.Provider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);