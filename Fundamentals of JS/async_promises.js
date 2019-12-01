const fetchData = (callback) => {
    setTimeout(() => {
        callback('Completed');
    }, 1500)
}

setTimeout(() => {
    console.log('Timer 1 milli second is done');
    fetchData(text => console.log(text));
}, 2000);

console.log("Hello");
console.log("Hi");


//using promises

const fetchDataWithPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done');
        }, 1500);
    });
};


fetchDataWithPromise()
    .then(text => console.log(text))
    .catch(err => console.log(err));