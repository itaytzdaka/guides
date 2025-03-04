// example for async function:

function asyncFunction(){

    //setTimeout is async task, so the compiler won't wait it to end. It's like to send request to server 
    setTimeout(() => {
        return "Task completed" //the response from the "server"
    }, 3000);
}

const response = asyncFunction();


//the result will be "response: undefined" because the compiler didn't wait the task to end
console.log("response: "+response);


//to handle async task, we need to define a callback function.

