const person = {
    name: 'Noorul Ameen K M',
    age: 23,
    greet: function() {
        console.log(`Hi, I am ${this.name}`);
    }
}

console.log(person.name);
console.log(person.age);
console.log(person.greet);

const printName = ({ name, age }) => {
    console.log("Name inside the function ", name);
    console.log("age inside the function ", age);
}

printName(person);


const hobbies = ['Sports', 'Gaming'];

let [hobbie1, hobbie2] = hobbies;
console.log(hobbie1, hobbie2);