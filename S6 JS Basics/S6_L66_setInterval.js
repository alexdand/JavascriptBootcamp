var timerId = setTimeout(function() {
    console.log("This function runs after 3 seconds");
}, 3000);

setTimeout(function() {
    console.log("Cancelling first timeout ", timerId);
    clearTimeout(timerId);
}, 2000);

var number = 0;

var intervalId = setInterval(function() {
    number++;
    console.log("Number: ", number);
    if (number === 5) {
        clearInterval(intervalId);
    }
}, 1000);
