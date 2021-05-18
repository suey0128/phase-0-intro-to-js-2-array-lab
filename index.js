// Write your solution here!

//const { createSandbox } = require("sinon");

// const cats = ["Milo", "Otis", "Garfield"]; 

// function destructivelyAppendCat(name) {
//     return cats.push(name);
// }

// function destructivelyPrependCat(name) {
//     return cats.unshift(name);
// }

// function destructivelyRemoveLastCat() {
//     return cats.pop();
// }

// function destructivelyRemoveFirstCat() {
//     return cats.shift();
// }

// function appendCat(name) {
//     const newAppendCat = [...cats,name];
//     return newAppendCat;
// }

// function prependCat(name) {
//     const newPrependCat = [name, ...cats];
//     return newPrependCat;
// }

// function removeLastCat() {
//     return cats.slice(0,length-1);
// }

// function removeFirstCat() {
//     return cats.slice(1);
// }









let cats = ["Milo", "Otis", "Garfield"];

// function destructivelyAppendCat(name) {
//     cats.push(name);
// }

let destructivelyAppendCat = name => cats.push(name);

// function destructivelyPrependCat(name) {
//     cats.unshift(name);
// } 

let destructivelyPrependCat = name => cats.unshift(name);

// function destructivelyRemoveLastCat() {
//     cats.pop();
// }

let destructivelyRemoveLastCat = () => cats.pop();

// function destructivelyRemoveFirstCat() {
//     cats.shift();
// }

let destructivelyRemoveFirstCat = () => cats.shift();

function appendCat(name) {
    let newCats = [...cats,name];
    return newCats;
}

function prependCat(name) {
    let newCats = [name, ...cats];
    return newCats;
}

function removeLastCat() {
    return cats.slice(0,cats.length-1);
}

function  removeFirstCat() {
    return cats.slice(1,cats.length);
}