'use strict';
// es5
/*function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    return this.price = this.price - this.price * 0.25;
}*/
// es6
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount(){
        return this.price = this.price - this.price * 0.25;
    }

}
let product1 = new Product('Bananas', 65);
console.log(product1.make25PercentDiscount());