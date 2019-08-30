var person = {
    name: "Noorul Ameen K M",
    age: 23,
    getInfo() {
        return "I am " + this.name + " and i am " + this.age + " year's old"
    }
}

console.log(person);
console.log(person.getInfo());