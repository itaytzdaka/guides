//tsc --init for creating tsconfig.json file.
//tsc for compiling

//Basic Types

let num: number = 5;
let company: string = "microsoft";
let isPublished: boolean = true;
let x: any = "hello";



//arrays
let ids: number[] = [1, 2, 3, 4, 5];
let ids2: Array<number> = [1, 2, 3, 4, 5];

let ar: any[] = [1,true, "hello"];
let ar2: Array<any> = [1,true, "hello"];

let person: [number, string, boolean] = [1, 'brad', true];

let employee: [number,string] [];

employee= [
    [1,'Brad'],
    [2,'John'],
    [3,'Jill']
];

//Unions
let onion: string | number = 22;
onion='22';

let onion2: "hi" | "bi" = "hi";
let onion3: 0 | 1 = 1;

type onionType = string | number;
let onion4 :onionType= 1;
onion4='1';




//Type Assertion

let cid: any = 1;
//let customerId = <number>cid; //option 1
let customerId = cid as number;



//functions

function addNum(x:number, y:number):number {
    return x+y;
}


//////////////////////////////////////////////////   type vs interface   /////////////////////////////////////////////////////////////////////////////////////////////



// ***********************************  objects  *********************************** //

// type object:

const user: {id: number, name: string}={
    id : 1,
    name: 'John'
}

type User1={
    readonly id: number,
    name: string,
    age?: number,
    print(): void
}

const user1: User1={
    id : 1,
    name: 'John',
    age: 20,
    print() {},
}

// user1.id=5; //readonly



// type object extension:

type User11 = {
    readonly id: number,
    name: string,
    age?: number,
};

type User11ex = User11 & { print(): void };

const user11ex: User11ex={
    id : 1,
    name: 'John',
    age: 20,
    print() {},
}



// interface object:

interface User2 {
    readonly id: number,
    name: string,
    age?: number,
    print() : void
}

const user2: User2 ={
    id : 1,
    name: 'John',
    age: 20,
    print() {},
}

// user2.id=5; //readonly



// interface object extension:

interface User22{
    readonly id: number,
    name: string,
    age?: number,
}

interface User22ex extends User22{
    print(): void
}


const user22ex: User22ex = {
    id : 1,
    name: 'John',
    age: 20,
    print() {},
}



// ***********************************  functions  *********************************** //


type MathFunc1 = (x:number, y:number) => number

interface MathFunc2{
    (x:number, y:number):number
}

const add1: MathFunc1=(x:number, y:number): number=> x+y;
const add2: MathFunc2=(x:number, y:number): number=> x+y;




// ***********************************  classes  *********************************** //


// interfaces by same name are merge

interface PersonInterface{
    //private id: number; prohibit
    name:string;
}

interface PersonInterface{
    register(): string;
}


class Person implements PersonInterface{
    private id: number;
    name: string; // public by default
    
    constructor(id: number, name: string){
        this.id=id;
        this.name=name;
    }

    register(): string{
        return "registered";
    }
}

const brad = new Person(1 , 'Brad Trave');
//console.log(brad.id); //private




// ***********************************  generics vs any  *********************************** //


//any
function getArray1(items: any[]): any[]{
    return new Array().concat(items); //add items to a new array
}

let numArray1 = getArray1([1,2,3,4]); //type any[]
let strArray1 = getArray1(['brad','John']); //type any[]

//generic
function getArray2<T>(items: T[]): T[]{
    return new Array().concat(items);
}

let numArray2 = getArray2<number>([1,2,3,4]); //type number
let strArray2 = getArray2<string>(['brad','John']); //type string
let numArray3 = getArray2<number|string>([1,2,3,4,'brad']); //type onion: number|string


// strArray2.push(1); //prohibit



// ***********************************  uses  *********************************** //


/*

type: unions , primitives , functions

interfaces: declaration merging , classes


*/