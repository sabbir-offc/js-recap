// 1. JSON
const person = {
    name: 'Sabbir Howlader',
    age: 17,
    job: 'Web Developer',
    skills: ['HTML', 'CSS', 'Javascript']
};

const studentJson = JSON.stringify(person);
// console.log(studentJson);
// console.log(person)

const studentObj = JSON.parse(studentJson);
// console.log(studentObj);

//keys,values
const keys = Object.keys(person);
// console.log(keys)

const values = Object.values(person);
// console.log(values)


const products = [
    { name: 'laptop', price: 16000, brand: 'lenovo', color: 'silver' },
    { name: 'laptop', price: 14000, brand: 'mac', color: 'black' },
    { name: 'laptop', price: 12000, brand: 'hp', color: 'golden' },
    { name: 'watch', price: 2300, brand: 'Titan', color: 'gold' },
    { name: 'laptop', price: 11000, brand: 'samsung', color: 'silver' }
];

const newProduct = {name: 'mobile', price:16999, brand: 'vivo', color: 'golden'};



// console.log(products);
const newProducts = [...products,newProduct];
// console.log(newProducts);

const remainingProducts = products.filter(products => products.name !== 'watch');
console.log(remainingProducts)

