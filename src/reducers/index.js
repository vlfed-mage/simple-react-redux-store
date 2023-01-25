import actionTypes from '../action-types'

const initialState = {
    books: [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler',
        },
        {
            id: 2,
            title: 'Release It!',
            author: 'Michael T. Nygard',
        }
    ]
};

const { BOOKS_LOADED } = actionTypes;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOKS_LOADED:
            return { ...state, books: action.payload };
        default:
            return state;
    }
};

export default reducer