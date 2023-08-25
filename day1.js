// task 1
var age = 20; 
var isStudent = true; 
var favoriteColors = ["white", "blue", "red"]; 
//////////////////////////////////////

// task 2
var mixQuote = 'combinaison entre simple quote (\') et double quote (").';
console.log(mixQuote);
//////////////////////////////////////

// task 3
var age = 20; 
var isStudent = true; 
var nom = "IKRAM"; 
var sentence = "My name is " + nom + ". I am " + age + " years old, and I am" + (isStudent ? "" : " not") + " a student." ;
console.log(sentence);
//////////////////////////////////////

// task 5
const yourFavoriteAnimal = "horse";
const yourFavoriteColor = "red";
const userFavoriteAnimal = prompt("What's your favorite animal?");
const userFavoriteColor = prompt("What's your favorite color?");
if (userFavoriteAnimal === yourFavoriteAnimal && userFavoriteColor === yourFavoriteColor) {
  console.log("Wow, we have the same favorite animal and color!");
} else if (userFavoriteAnimal === yourFavoriteAnimal) {
  console.log("We share the same favorite animal!");
} else if (userFavoriteColor === yourFavoriteColor) {
  console.log("We share the same favorite color!");
} else {
  console.log("We don't have the same favorite animal or color.");
}

////////////////////////
// task 6

const userInput = prompt("Enter a number:");

if (number > 0) {
  console.log("This is positive.");
} else if (number < 0) {
  console.log("This is negative.");
} else {
  console.log("This is zero.");
}

////////////////////////
// task 8

const usersInput = prompt("Enter a value:");
if (usersInput) {
  console.log("The value is truthy.");
} else {
  console.log("The value is falsy.");
}



