
let button = document.getElementById("search");



function searchfunction(){
    let input = document.getElementById("inputi")
    let inputval = input.value
    let url = "https://images-api.nasa.gov/search?description=" + "{" + inputval + "}"
    fetch(url)
        .then((res) => res.json())
        .then
            (data => {
                 const images = data
                 const arrayoflinks = Object.values(images.collection.items)
                let imgarray
                for (i in arrayoflinks)
                {
                        let imgtag = document.createElement("img")
                        let imgsrc = document.createAttribute("src")
                        imgarray = arrayoflinks[i]
                        imgsrc.value = imgarray.links[0].href
                        imgtag.setAttributeNode(imgsrc)
                        document.body.appendChild(imgtag)
                    }
                
                    
                        
                            
                
                }
                
                
            )

    
            
                            
            
            


}

button.addEventListener("click", searchfunction)
