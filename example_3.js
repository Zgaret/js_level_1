'use strict'

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    }
];
// проходимся по массиву и применяем к price
products.forEach((elem) => elem.price = elem.price - elem.price * 0.15);
console.log(products);
