'use strict'

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            '1.jpg',
            '2.jpg',
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            '3.jpg'
        ]
    },
    {
        id: 8,
        price: 78,
    },
];
//получаем массив с товарами у которых есть фото
const prodWithPhoto = products.filter((elem) => 'photos' in elem && elem.photos.length > 0);
console.log(prodWithPhoto);
// получаем отсортированный массив с ценами по возрастанию
const sortProdFromLowPriceToHide = products.sort(function (elem1 , elem2) {
    return elem1.price - elem2.price;
})
