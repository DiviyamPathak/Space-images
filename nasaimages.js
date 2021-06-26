let input = document.getElementById("inputi");
let button = document.getElementById("search");

let inputval = input.nodeValue

function searchfunction(_inputval){
    return fetch("https://images-api.nasa.gov/search?description={moon}")
            .then((res) => res.json())
            .then(data => {
                    const images = data
                    //const descriptorlin = Object.getOwnPropertyDescriptor(images, "collection")
                    //const arrres = Object.values(descriptorlin)
                    //const iop = arrres[0]
                    //const arrayofitems = Object.getOwnPropertyDescriptor(iop, "items")
                    //console.log(arrayofitems.value)
                    const arrayoflinks = Object.values(images.collection.items)
                    let imgarray
                    for (i in arrayoflinks)
                    {
                        let imgtag = document.createElement("img")
                        let imgsrc = document.createAttribute("src")
                        imgarray = arrayoflinks[i]
                        imgsrc.value = (imgarray.href)
                        imgtag.setAttributeNode(imgsrc)
                        document.body.appendChild(imgtag)
                    }
                    console.log(arrayoflinks)
                    
                        fetch(imgarray.href)
                            .then(console.log(data)
                            )})
            
                            
            
            


}

button.addEventListener("click", searchfunction)