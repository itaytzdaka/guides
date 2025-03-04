//fetch return a Promise

//two approach to handle the response:


//#1

fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => {
        console.log(response);

        if (!response.ok) {
            throw Error("fetch failed");
        }
        return response.json()

    })
    .then(data => console.log(data))
    .catch(error => console.log(error.message));


//#2

async function getDataWithFetch() {
    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        console.log(response);

        if(!response.ok)
            throw Error("fetch failed");

        const data = await response.json();
        console.log(data);
        

    } catch (error) {
        console.log(error.message);
    }
}

getDataWithFetch();