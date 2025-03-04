//  if Promise's reject executed, the await throw an Error
//  the error can be catch at parent functions.

async function getDataFromAPI(){

    const response = await axios.get("http://httpstat.us/404");
    console.log(response);
}

async function execute1(){
    await getDataFromAPI();
}


async function execute2(){
    try {
        await execute1();
    } catch (error) {
        console.log("execute error:");
        console.log(error);
        console.log("execute message: "+error.message);
    }
}


execute2();
