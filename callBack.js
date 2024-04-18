// Code here for the callbacks task
function increment(){
    console.log(counter);
    counter += 1;
}
// Setting variables to hold the intervalID
// and also a counter
let intervalID;
let counter = 1;
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
// Stop button is disabled unless start button is pressed
stopButton.disabled = true;

let startCounter = function() {
    intervalID = setInterval(
        // Create the logic needed in the setInterval() function for
        //incrementing the counter and outputting to the console
        increment, 1000
    ); 
    // Disabling the start button after it is pressed
    startButton.disabled = true;
    // startButton.disabled = true;
    // Enabling/Stop button is enable once again after start button is pressed
    stopButton.disabled = false;
}

function stopCounter() {
    // add the logic required to stop the counter
    // using clearInterval()
    clearInterval(intervalID);
    // Enabling the start button after stop button is pressed
    startButton.disabled = false;
    // Disabling the stop button unless start button is pressed
    stopButton.disabled = true;
}

// The event listener below is missing a callback function argument;
// this button should start the outputting of the counter to the console
try {
    startButton.addEventListener("click", startCounter);
}
catch (err){
    console.log(err);
}
// The event listener below is missing a callback function argument;
// this button should the counter from outputting to the console
try {
    stopButton.addEventListener("click", stopCounter);
}
catch (err) {
    console.log(err);
}