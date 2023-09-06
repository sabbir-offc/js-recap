// 'string', 5, true, {}, []
//'',0, false, null, undefined,

//check Truthy values
let myVar = 5;
if (myVar) {
    myVar *= 100;
}
else{
    myVar = 0;
}

// console.log(myVar);


let myMoney = 50;

if (!myMoney) {
    myMoney += 120;
}else{
    myMoney = 0;
}
// console.log(myMoney)


const money = 110;
let food;
money > 70 ? food = 'ami biryani khabo' : food = 'ami cha khabo';
// console.log(food)

let food2 = money>100 ? 'biryani khabo' :'cha khabo';
// console.log(food2)




//string
const num1 = '52';
// console.log(num1)
const num2 = 50;
// console.log(num2 + '')


let isActive = true;
const showUser = () => console.log('Displaying user');
const hideUser = () => console.log('hiding user');

// isActive ? showUser() : hideUser();

//use && if the left side is true then right side will be executed.
// isActive && showUser();

//use || if the left side is false then right side will be executed.
isActive || showUser();

//toogle boolea
isActive = !isActive;
console.log(isActive)