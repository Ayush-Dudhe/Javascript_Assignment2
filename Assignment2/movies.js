const url1="https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json"

async function data1(){
    const response= await fetch(url1);
    return response.json();
}

data1()
.then(jsonData=>{
    //console.log(jsonData)

    //Varialble for Storing required data
    var actors=[]
    var genres=[]
    var final=[]
    //Traversing the whole JSON data
    jsonData.forEach(element => {
        //console.log(element.cast)
        //console.log(element.genres)
        
    });
})

