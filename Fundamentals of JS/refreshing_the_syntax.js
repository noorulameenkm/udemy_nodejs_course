// Variables
var name = "Noorul Ameen KM";
var age = 23;
var isMatured = true;

// functions
function maturedOrNot(name, age, isMatured) {
    if (isMatured) {
        return "The man with name " + name + " and age " + age + " is matured";
    }
    return "The man with name " + name + " and age " + age + " is not matured";
}

console.log(maturedOrNot(name, age, isMatured));