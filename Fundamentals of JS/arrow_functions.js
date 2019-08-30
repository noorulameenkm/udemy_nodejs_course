// Function with three parameters
const introduceMe = (firstName, lastName, age) => {
    return (
        "I am " + firstName + lastName + " and i am " + age + " year's old."
    );
}
var firstName = "Noorul";
var lastName = "Ameen KM";
var age = 23;
console.log(introduceMe(firstName, lastName, age));

// Function with two parameters and without return keyword
const add = (a, b) => a + b;

var a = 10;
var b = 20;
console.log(add(a, b));

// Function with single parameter and without return keyword and no argument brackets
const addOne = a => a + 1;

var a = 5;
console.log(addOne(a));

// Function with no parameters and with argument brackets and without return keyword
const noParam = () => "This function don't have parameters but have an empty bracket";

console.log(noParam());