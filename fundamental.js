// 1.how to declare a variable using let and const.
const fatherName = 'Shahin Howlader';
let seasonName = 'Rainy';
seasonName = 'Summer';


//2. 6 value for condition '>,<, ===, !==, <=, >=';
//condition && ||;
if(fatherName === 'Shahin Howlader' && seasonName === 'Rainy'){

}
else if(fatherName !== 'Shahin howlader'){

}
else{

}


// 3. array
//index
//length
const numbers = [12, 13, 14, 15, 16];
numbers[0] = 1;
for(let i = 0;i <numbers.length;i++){
    // console.log(numbers[i]);
}

//4. for loop.
for(const number of numbers){
    // console.log(number);
};
// console.log(numbers);

//5. function
function multiply(a, b){
    const result = a * b;
    return result;
}
// console.log(multiply(5, 2));


//6. object
//3 ways to access property by name.
const person = {
    name: 'Shahin',
    age: 25,
    job: 'Software Engineer',
    skills: ['HTML', 'CSS', 'Javascript']
};

// const {name, age} = person;
const myAge = 'age';
console.log(person.age); //access directly
console.log(person['job']) //access property name by string
console.log(person[myAge]) //access via property name in a variable.