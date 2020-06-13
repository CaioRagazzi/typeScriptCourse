import { Product } from "./product.model";
import { validate } from "class-validator";

const products = [
    { title: 'A Carpet', price: 29.99 },
    { title: 'A Book', price: 10.99 }
]

const newProd = new Product('', -5.99)
validate(newProd).then(erros => {
    if (erros.length > 0) {
        console.log('VALIDATION ERRORS!');
        console.log(erros);
    } else {
        console.log(newProd.getInformation());
    }
});


// const p1 = new Product('A Book', 12.99);

const loadedProducts = products.map(prod => {
    return new Product(prod.title, prod.price);
})

for (const prod of loadedProducts) {
    console.log(prod.getInformation())
}
