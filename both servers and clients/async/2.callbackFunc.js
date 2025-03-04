//example for callback and errorCallback function:

function callbackCalcFunction(callback, errorCallback){

    //setTimeout is async task, so the compiler won't wait it to end. It's like to send request to server 
    setTimeout(() => {
        if(1+1==2){
            callback("OK"); //the function will run the callback and send it the data, after the ending of the task
        }
        else{
            errorCallback("Error"); //if error occur in the task, the function will run the errorCallback and send it the error
        }
    }, 3000);
}

//we need to provide functions to run after the task completed. callback and error functions:
callbackCalcFunction( response=> console.log("callbackCalc response: " + response) , error=> console.log("callbackCalc catch: " + error) );


//we can't do it with async-await because the function don't return a Promise.

async function getCallbackData(){
    try {
        const response = await callbackCalcFunction()  //the function don't return a Promise.
        console.log(response);
    } catch (error) {
        console.log("catch: " + error);
    }
}