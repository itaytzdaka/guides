"use strict";
//tsc --init for creating tsconfig.json file.
//tsc for compiling
//Basic Types
let num = 5;
let company = "microsoft";
let isPublished = true;
let x = "hello";
//arrays
let ids = [1, 2, 3, 4, 5];
let ids2 = [1, 2, 3, 4, 5];
let ar = [1, true, "hello"];
let ar2 = [1, true, "hello"];
let person = [1, 'brad', true];
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill']
];
//Unions
let onion = 22;
onion = '22';
let onion2 = "hi";
let onion3 = 1;
let onion4 = 1;
onion4 = '1';
//Type Assertion
let cid = 1;
//let customerId = <number>cid; //option 1
let customerId = cid;
//functions
function addNum(x, y) {
    return x + y;
}
//////////////////////////////////////////////////   type vs interface   /////////////////////////////////////////////////////////////////////////////////////////////
// ***********************************  objects  *********************************** //
// type object:
const user = {
    id: 1,
    name: 'John'
};
const user1 = {
    id: 1,
    name: 'John',
    age: 20,
    print() { },
};
const user11ex = {
    id: 1,
    name: 'John',
    age: 20,
    print() { },
};
const user2 = {
    id: 1,
    name: 'John',
    age: 20,
    print() { },
};
const user22ex = {
    id: 1,
    name: 'John',
    age: 20,
    print() { },
};
const add1 = (x, y) => x + y;
const add2 = (x, y) => x + y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return "registered";
    }
}
const brad = new Person(1, 'Brad Trave');
//console.log(brad.id); //private
// ***********************************  generics vs any  *********************************** //
//any
function getArray1(items) {
    return new Array().concat(items); //add items to a new array
}
let numArray1 = getArray1([1, 2, 3, 4]); //type any[]
let strArray1 = getArray1(['brad', 'John']); //type any[]
//generic
function getArray2(items) {
    return new Array().concat(items);
}
let numArray2 = getArray2([1, 2, 3, 4]); //type number
let strArray2 = getArray2(['brad', 'John']); //type string
let numArray3 = getArray2([1, 2, 3, 4, 'brad']); //type onion: number|string
// strArray2.push(1); //prohibit
// ***********************************  uses  *********************************** //
/*

type: unions , primitives , functions

interfaces: declaration merging , classes


*/ 
