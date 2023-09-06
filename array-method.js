const products = [
    { name: 'laptop', price: 16000, brand: 'lenovo', color: 'silver' },
    { name: 'laptop', price: 14000, brand: 'mac', color: 'black' },
    { name: 'laptop', price: 12000, brand: 'hp', color: 'golden' },
    { name: 'laptop', price: 10000, brand: 'Dell', color: 'yellow' },
    { name: 'laptop', price: 11000, brand: 'samsung', color: 'silver' }
];


//map
const brand = products.map(product => product.brand);
// console.log(brand);
const price = products.map(product => product.price);
// console.log(price)
// products.forEach(product => console.log(product));
// products.forEach(product => console.log(product.color));
products.forEach(product => {
    // console.log(product.brand);
})


//filter
const filters = products.filter(a => a.price > 12000);
// console.log(filters)
const specificName = products.filter(a => a.brand.includes('a'));
// console.log(specificName)

//find
const finds = products.find(a => a.brand.includes('a'));
console.log(finds)