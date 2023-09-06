//1. array destructuring.
const numbers = [25,30,35,40,50];

const [x,y] = numbers;
function boxify(num1,num2) {
    const nums = [num1,num2];
    return nums;
};
// console.log(boxify(10,12));


const person = {
    name: 'Sabbir Howlader',
    age: 17,
    job: 'Web Developer',
    skills: ['HTML', 'CSS', 'Javascript']
};

const [first,second] = person.skills;
// console.log(first, second);

//2. object destructuring.

const person2 = {
    name: 'Sabbir Howlader',
    age: 17,
    job: 'Web Developer',
    skills: ['HTML', 'CSS', 'Javascript']
};

const {name,age} = person2;

// console.log(name,age);

const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'Mac',
    languages: ['HTML', 'CSS', 'Javascript'],
    specifications: {
        height: 70,
        weight: 60,
        address:'Betka',
        age: 17,
        watch: {
            size: 40,
            color: 'black',
            brand: 'Titan'
        }
    }
}

const {height, weight, address} = employee.specifications;
// console.log(height,weightaddress);
const {size, color, brand} = employee.specifications.watch;
console.log(size,color);