// Input size of list and range of numbers. e.g. 7 items between 1 and 100
// Output is a list of random numbers 

console.log("Random number ", Math.floor((Math.random() * 10) + 1));

function listGen(amount, max){
    console.log("Generating a list of " + amount + " numbers between 1 and " + max);
}

listGen(10, 100);