import React, { useContext } from 'react';

import LoaderIndicator from "../loader-indicator";
import BookstoreServiceContext from "../bookstore-service-context";

const App = () => {
    const { getBooks } = useContext(BookstoreServiceContext);
    console.log(getBooks());
    return (
        <LoaderIndicator />
    )
};

export default App;