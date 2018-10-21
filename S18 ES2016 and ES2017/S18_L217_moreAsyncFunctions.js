const fetch = require('node-fetch');

async function getUserData() {
    var user1Promise = fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json());
    var user2Promise = fetch('https://jsonplaceholder.typicode.com/users/2').then(res => res.json());

    var user1Data = await user1Promise;
    var user2Data = await user2Promise;

    console.log(user1Data.name);
    console.log(user2Data.name);
}

getUserData();

async function getMoreData(first, second) {
    var userList = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users/3').then(res => res.json()),
        fetch('https://jsonplaceholder.typicode.com/users/4').then(res => res.json())
    ]);
    console.log(userList[0].name);
    console.log(userList[1].name);
}

getMoreData();
