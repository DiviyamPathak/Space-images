let input = document.getElementById("inputi");
let button = document.getElementById("search");

let inputval = input.nodeValue

function searchfunction(_inputval){
    return fetch("https://images-api.nasa.gov/search?description={moon}")
            .then((res) => res.json())
            .then(data => {const images = data
                console.log(images) })
            .catch()
}

button.addEventListener("click", searchfunction)