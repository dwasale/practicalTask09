// Code here for the callbacks task
function increment(){
    console.log(counter);
    counter += 1;
}
// Setting variables to hold the intervalID
// and also a counter
let intervalID;
let counter = 1;
// Stop button is disabled unless start button is pressed
document.getElementById('stop').disabled = true;

let startCounter = function() {
    intervalID = setInterval(
        // Create the logic needed in the setInterval() function for
        //incrementing the counter and outputting to the console
        increment, 1000
    );
    // Disabling the start button after it is pressed
    document.getElementById('start').disabled = true;
    // Enabling/Stop button is enable once again after start button is pressed
    document.getElementById('stop').disabled = false;
}

function stopCounter() {
    // add the logic required to stop the counter
    // using clearInterval()
    clearInterval(intervalID);
    // Enabling the start button after stop button is pressed
    document.getElementById('start').disabled = false;
    // Disabling the stop button unless start button is pressed
    document.getElementById('stop').disabled = true;
}

let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');

// The event listener below is missing a callback function argument;
// this button should start the outputting of the counter to the console
startButton.addEventListener("click", startCounter);

// The event listener below is missing a callback function argument;
// this button should the counter from outputting to the console
stopButton.addEventListener("click", stopCounter);