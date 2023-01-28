const bookstoreService = () => {

    const data = [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler',
            quantity: 1,
            price: 32,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
        },
        {
            id: 2,
            title: 'Release It!',
            author: 'Michael T. Nygard',
            quantity: 2,
            price: 45,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
        }
    ];

    return {
        getBooks() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    Math.random() > 0.75
                        ? reject(new Error('Something get terrible wrong'))
                        : resolve(data);
                }, 800)
            });
        }
    }
}

export default bookstoreService;
