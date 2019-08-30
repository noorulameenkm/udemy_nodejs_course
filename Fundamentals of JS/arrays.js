const hobbies = ['Movies', 'Musics', 'Reading'];

// for-of loop
for (let hobby of hobbies) {
    console.log(hobby);
}

// Using map function to iterate to return the new array
console.log(hobbies.map((hobby, index) => hobby + ' ' + index));
console.log(hobbies);