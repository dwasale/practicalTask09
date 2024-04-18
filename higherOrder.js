// Test data
const arrayWords = ["Apple", "Banana", "Orange", "Mango", "Strawberry", "Pear", "Pineapple", "Papaya", "Cherry", "Blueberry"];
// myFilterFunction(HOF) takes an array(arr) and hypothetical function(fn) as arguments
let myFilterFunction = (arr) => (fn) => {
    // declaring a new array
    const arrayAfterMapping = [];
    for (let i = 0; i < arr.length; i++){
        // The call back function is applied to each element
        arrayAfterMapping.push(fn(arr[i]));
    }
    // return a new array
    return arrayAfterMapping;
};
// myFilterFunction(HOF) is used with an anonymous function to return the length and compare for 6 letters word
const arrayAfterFilter = myFilterFunction(arrayWords)((item) => item.length == 6);
// Prints the values of true or false in console
console.log(arrayAfterFilter);
// looping through each array to check if the value is true and printing the respective values in the console
for (let i =0; i < arrayAfterFilter.length; i++){
    if(arrayAfterFilter[i] == true){
        console.log(arrayWords[i]);
    }
}


