function doubleAllValues(){
    const firstArray = [2, 4, 6, 8, 9];
    const secondArray = [];

    for (let i = 0; i < firstArray.length; i++){
        secondArray.push(firstArray[i] * 2);
    }
    return secondArray;
}

console.log(doubleAllValues());

//Higher Order function

function HiherOrderMultiply(){
    const firstArrayHof = [2, 3, 4, 5, 6];
    const multiplyByTwo = (item) => item * 2;

    const secondArrayHof = firstArrayHof.map(multiplyByTwo);
    return secondArrayHof;
}
console.log(HiherOrderMultiply());

//Higher Order Function with array of string to find the length of each string in an array
const wordArray = ["Express", "Cat", "Meow", "Dog", "Bark"];
// myMapper(HOF) takes an array(arr) and hypothetical function (fn) as argument
let myMapper = (arr) => (fn) => {
    const arrayAfterMapping = [];
    for (let i = 0; i < arr.length; i++){
        // Callback function (fn) is applied to each element
        arrayAfterMapping.push(fn(arr[i]));
    }
    // Return a new array
    return arrayAfterMapping;
};
// myMapper(HOF) is used with an anonymous function to return the length of each word followed by a sapce
const outputArray = myMapper(wordArray)((item) => item.length + " ");
// Output the result in the console
console.log("Lenth of words: " + outputArray);


// asynchronous execution of callbacks meaning executing running code sequentially one after another
// function first(){
//     console.log(1);
// }
// function second(){
//     console.log(2);
// }
// first();
// second();


// lets delay the function for few seconds for not executing code sequentially 
function first(){
    setTimeout(function(){
        console.log(1);
    },5000);
}
function second(){
    console.log(2);
}
first();
second();
