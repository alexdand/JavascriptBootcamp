let url = "https://api.coindesk.com/v1/bpi/currentprice.json";

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data.bpi.USD.rate);
  })
  .catch(function(error) {
    console.log(error);
  });
