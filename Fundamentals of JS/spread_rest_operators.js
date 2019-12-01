const person = {
    name: 'Noorul Ameen K M',
    age: 23,
    greet() {
        console.log('Hi, I am ', this.name);
    }
}

const copiedPerson = {...person };
copiedPerson.greet();
console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking'];

// const copiedArray = hobbies; //Copying by assigning the name
// const copiedArray = [hobbies] // This is wrong, because it will create array of array
const copiedArray = [...hobbies];
/* Spread operators is three dots(...), this will take the
   variable after the operator and pull out the values in the variable 
   and wrap it inside the wrapper of the operator
*/
console.log(copiedArray);

// It is rest operator, used to merge the values into the array or object
const toArray = (...args) => {
    return args;
}

console.log(toArray(1, 2, 3, 4, 5, 6));