'use strict'

const error = new Error('I DID NOT FIRE');

const promise = Promise.reject('Nope');


promise.catch(error);

promise.resolve('Hey!');
// promise.reject('Nope');


