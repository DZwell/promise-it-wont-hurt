'use strict'

const error = new Error('REJECTED!');

function onReject (error) {
  console.log(error.message);
}

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(error);
  }, 300);
});


promise.then((error) => {
}, (error) => {
  onReject(error);
});



// Their solution

'use strict';

// Create a promise

var promise = new Promise(function (fulfill, reject) {
  // After the timeout reaches 300ms, reject the promise with an `Error` object
  // with parameter `"REJECTED!"`.

  setTimeout(function () {
    reject(new Error('REJECTED!'));
  }, 300);
});

// Create a function to print `error.message` using `console.log`.

function onReject(error) {
  console.log(error.message);
}

// Pass this function as a rejection handler to the `then` method of the
// promise (the second parameter).

promise.then(null, onReject);
