let promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    let randomDecimal = Math.random();
    if (randomDecimal > 0.5) {
      resolve("Success! Number is: " + randomDecimal);
    } else {
      reject("Error! Number is: " + randomDecimal);
    }
  }, 4000);
});

promise
  .then(function(data) {
	console.log(data);
  })
  .catch(function(error) {
	console.log(error);
});
