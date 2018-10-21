// The purpose of async functions is to simplify writing asynchronous code, specifically Promises.
// The await keyword pauses the execution of the async function and is followed
// by a Promise. Await waits for the promise to resolve, and then
// resumes the async function's execution and returns the resolved value.
// Think of the await keyword like a pause button (similar to yield with generators)

const fetch = require('node-fetch');

async function getData() {
    console.log("Starting!");
    let userData = await fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json());
    console.log("All Done!");
    console.log(userData);
}

let userCollector = {
    data: "Leanne",
    async getUser() {
        let response = await fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json());
        console.log(response);
    }
}

class UserInfo {
    constructor(id) {
        this.id = id;
    }
    async getInfo() {
        try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/users/${this.id}`).then(res => res.json());
            console.log(response.name);
        } catch(e) {
            console.log("User does not exist!");
        }
    }
}

let us = new UserInfo(2);
console.log(us.getInfo());
