const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: [
                {id: 1, size: 'XL'}, 
                {id: 2, size: 'Large'}, 
                {id: 3, size: 'Medium'},
                {id: 4, size: 'Small'},
                {id: 5, size: 'XS'}
                ]
        }
    }
})
