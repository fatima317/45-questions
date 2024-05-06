//Tests for equality and inequality with strings
let fruit = "apple";
console.log("Testing equality with strings:");
console.log(fruit == "apple"); 
console.log(fruit == "Apple"); 
console.log("Testing inequality with strings:");
console.log(fruit != "Apple");
console.log(fruit != "apple");
//Tests using the lower case function
console.log("Testing with lowercase function:");
console.log("Apple".toLowerCase() == "apple"); 
console.log("Apple".toLowerCase() == "Apple");
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Testing equality with number");
let number = 10
console.log(number == 10);
console.log(number == 100);
console.log("Testing inequality with number:");
console.log(number != 100);
console.log(number != 10);
console.log("Testing greater than");
console.log(100 > 10);
console.log(10 > 100);
console.log("Testing less than");
console.log(10 < 100);
console.log(100 < 10);
console.log("Testing greater than equal to");
console.log(100 >= 10);
console.log(10 >= 100);
console.log("Testing less than equal to");
console.log(10 <= 100);
console.log(100 <= 10);
//Tests using "and" and "or" operators
console.log("Testing 'and' and 'or' operators");
console.log(true || false);
console.log(true && false);
//Test whether an item is in a array
let fruits : string[] = ["Apple", "Mango", "Banana"];
console.log("Is 'Apple' in fruits?");
console.log(fruits.includes("Apple"));
//Test whether an item is not in a array
console.log("Is 'Grapes' in fruits?");
console.log(fruits.includes("Grapes"));
















































