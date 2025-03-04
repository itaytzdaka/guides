//  Promise is an Object that can execute an async task and know to handle callbacks
//  Promise example:


//  promiseCalcFunction() return a Promise that execute an async task
function promiseCalcFunction(){

    return new Promise((resolve,reject)=>{

        //the async task, may be an example for request to server 
        setTimeout(() => {
            if(1+1==3){
                resolve("OK"); //will execute: .then((response)=>{})
            }
            else{
                reject("Error"); //will execute: .catch((error)=>{})
            }
        }, 3000);
    });
}

//  execute the Promise:

//  the regular way:
const myPromise = promiseCalcFunction(); //promiseCalcFunction return a Promise

//  we can now execute the task of the Promise and provide the callback function

//  #1
myPromise.then((response)=>{ 
    console.log("promiseCalc response: " + response);
}).catch((error)=>{
    console.log("promiseCalc catch: " + error);
});

//  or execute the function and the Promise directly

//  #2
promiseCalcFunction().then((response)=>{
    console.log("promiseCalc response: " + response);
}).catch((error)=>{
    console.log("promiseCalc catch: " + error);
});
