function increaseCounter() {
  counter++;
  console.log("Counter: ", counter);
}

function runLater(callback, timeInMillis) {
  let p = new Promise(function(resolve, reject) {
    setTimeout(function() {
      let res = callback(counter);
      resolve(res);
    }, timeInMillis);
  });
  return p;
}

var counter = 0;

runLater(increaseCounter, 1000)
  .then(function() {
    return runLater(increaseCounter, 2000);
  })
  .then(function() {
    return runLater(increaseCounter, 3000);
  })
  .then(function() {
    console.log("Finished.");
  });
