console.log("Hello World"); // Strings always with quotation signs
console.log("3433"); // Numbers
console.log("false"); // boolean
// This won't run in code

console.log(1 + 1);
console.log(3 * 5);

console.log("11");
console.log(11);
console.log("11" + "11");
console.log("11 + 11");
console.log(11 + 11);

console.log("George"==="jolie");
console.log("11"===11);
console.log("George"!=="George");
console.log("George"!=="George");

var myName = "Jolie" // camelcase spelling for variables
var myAge = "99"
var myFavDrink = "Coffee"

console.log("My name is " + myName)；
console.log("My age is " + myAge)；
console.log("My fav drink is " + myFavDrink +" and my age is " + myAge)；

//function part below↓

function sayHello() {
  console.log("Hello Everyone!")；
}

console.log(myName)
sayHello()

function kissJojo() {
  console.log("Mwah!")；
}

console.log("George")；
kissJojo()；

function whenToGoOut(date) {
  console.log("I'm going to ask her out " + date)；
}
whenToGoOut("today.")；

function subtractTwoNumbers(num1, num2) {
  console.log(num1 - num2)；
}
subtractTwoNumbers(99, 10)；


function whatIsHisName(name) {
  if (name === "Stan") {
    console.log("Tah-dah, you got his name!");
  } 
  else {
    console.log("Boo, that's not his name!");
  }
}
whatIsHisName("Tony")；


function weatherToday(weather) {
  if (weather === "sunny") {
    console.log("Enjoy the sun!");
  } 
  else if (weather === "rainy") {
    console.log("Better stay at home.");
  } 
  else {
    console.log("Check the weather!");
  }
}

weatherToday("windy")；
