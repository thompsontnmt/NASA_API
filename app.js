let searchButton = document.querySelector("#search")

// Add event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", () =>{
    console.log("button pressed")
    sendApiRequest()
})

//An asynch function to fetch data from the API
// Asynch must wait for information to be received before continuing
async function sendApiRequest(){
    let API_KEY = "8Q0i5QGIb1OlZb5f1c0SXfoaF4nNwdcZGXtK4lZL"
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
}


//function that does something with the data received from the API. the name of the function should be customized to whatever
function useApiData(data){
    document.querySelector("#content").innerHTML = data.explanation
    document.querySelector("#content").innerHTML =  `<img src="${data.url}">`

}
