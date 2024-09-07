// ? Async functions are a way to work with asynchronous
// code in a more synchronous way. They are built on top of 
// promises and are syntactic sugar for promises



// creating a promise 
const pizzaPromise = () => {
    // resolve and reject are callback functions
    // what is callback function?
    // a callback function is a function that is passed as an argument to another function, to be "callback" at a later time
    let order = true;

    if (order) {

        setTimeout(() => { // setTimeout is used to simulate a delay
        resolve("after 5 seconds, pizza delivered!");    
        }, 5000);
    } else {
        setTimeout(() => { // setTimeout is used to simulate a delay
            reject("After 5 seconds, Pizza not delivered");
            }, 5000);
    };

    // calling the function with a promise
    // use .then() to handle the resolved promise
    // use .catch() to handle the reject promise

    pizzaPromise()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })

    console.log("Waiting for you pizza...");

    // Terminology
    // Promise: An object that represents the eventual completion (or failure) of an asynchronus operation and its resulting value.
    // Resolve: A callback function that is used when the promise is fulfilled.
    // Reject: A callback function that is used when the promise is rejected.
    // .then(): A method that is used to handle the resolved promise.
    // .catch(): A method that is used to handle the rejected promise.
