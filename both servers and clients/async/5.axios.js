//axios return a Promise

//two approach to handle the response:


//#1

axios.get("http://httpstat.us/404").then((response)=>{
    console.log(response.data.description);
}).catch((error)=>{
    console.log(error.message);
});

//#2

async function getDataFromAPI(){
    try {
        const response = await axios.get("http://httpstat.us/404");
        console.log(response);
    } catch (error) {
        console.log(error.message);
    }
}

getDataFromAPI();