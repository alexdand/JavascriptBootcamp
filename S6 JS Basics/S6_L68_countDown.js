// Your goal is to Implement a function called countDown that accepts a time in seconds.
// The function will print the time remain to the console every second.
// Instead of printing 0, the function should print "Ring Ring Ring!!!".

function countDown(seconds) {
    let intervalId = setInterval(function() {
        seconds--;
        if (seconds === 0) {
            console.log("Ring Ring Ring!!!");
            clearInterval(intervalId);
        } else {
            console.log("Seconds left: ", seconds);
        }
    }, 1000);
}
