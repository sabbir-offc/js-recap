const numbers = [12, 13, 14, 15, 16];
const person = {
    name: 'Sabbir Howlader',
    age: 17,
    job: 'Web Developer',
    skills: ['HTML', 'CSS', 'Javascript']
};
//1. template string.
const about = `my name is ${person.name} and my age is ${person.age} and i have ${numbers[2]} numbers. My skills are ${person.skills[0]}`
console.log(about)

//2. arrow function



//3. spread operator
numbers.push(20);
numbers.push(20);
numbers.push(20);

const newNumbers = [...numbers,65,80];
console.log(numbers)
console.log(newNumbers)