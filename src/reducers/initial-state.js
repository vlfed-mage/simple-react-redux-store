const initialState = {
    books: [],
    loading: true,
    error: null,
    cartTable: [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            price: 32,
        },
        {
            id: 2,
            title: 'Release It!',
            price: 45,
        }
    ],
    cartTotal: 240
};

export default initialState;
