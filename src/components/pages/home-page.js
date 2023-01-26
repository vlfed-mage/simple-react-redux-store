import React, { useContext } from "react";

import BookStoreServicesContext from "../bookstore-service-context";
import CatalogList from "../catalog-list";

const HomePage = () => {
    const { getBooks } = useContext(BookStoreServicesContext)

    return (
        <CatalogList getBooks={ getBooks } /> // just for using ownProps in mapDispatchToProps
    )
};

export default HomePage;
