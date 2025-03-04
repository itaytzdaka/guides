


// async and await function handle Promises that executes async tasks
//  create a Promise with resolve and reject, and handle it with async await function:

const myPromise = new Promise((resolve,reject)=>{

    //the async task, may be for example a request to server 
    setTimeout(async () => {
        if(1+1==2){
            resolve("OK"); //will execute with .then((response)=>{})
        }
        else{
            reject("Error"); //will execute with .catch((error)=>{})
        }
    }, 1000);
});

//  the await execute the Promise and await the response from the resolve
//  we need try and catch to catch the reject

async function runPromise() {
    try {
        const response = await myPromise;
        console.log("myPromise response: " + response);
    } catch (error) {
        console.log("myPromise catch: " + error);
    }
}

//#3
runPromise();



//  every "async" function return a Promise<void>, a Promise that resolve "undefined" but execute an async task.
//  it's like to create a regular function that return a Promise that execute an async task but provide undefined in the resolve.

//examples:

function myRegularFunction() { //return Promise<any>

    return new Promise((resolve) => {

        //do an async task
        setTimeout(() => {
            resolve(undefined);
        }, 3000);
    });
}

//  the "await" execute the Promise with .than and await the response.

async function myAsyncFunction() { //return Promise<void>
    await myRegularFunction(); //the response from myRegularFunction() is "undefined"
}


async function runFunctions() { //return Promise<void>

    console.log(await myRegularFunction()); //response after 3 seconds
    console.log("between");
    console.log(await myAsyncFunction()); //response after 6 seconds

}

runFunctions();

