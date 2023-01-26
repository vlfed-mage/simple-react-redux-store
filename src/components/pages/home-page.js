import React, { useContext } from "react";

import BookStoreServicesContext from "../bookstore-service-context";
import CatalogListContainer from "../../containers/catalog-list-container";

const HomePage = () => {
    const { getBooks } = useContext(BookStoreServicesContext)

    return (
        <CatalogListContainer getBooks={ getBooks } /> // just for using ownProps in mapDispatchToProps
    )
};

export default HomePage;
