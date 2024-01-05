//
let name = "Trương Hoàng Diễm Ái";
let id = "PC05853";
// arrow function
let baiTap = function(){
    console.log(`${name}, ${id}`);
}
//
baiTap();
// 
fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
    .then(function(response){
        response.json().then(function(data){
            console.log(data.data);
            let array = data.data;

            let html = document.getElementById('Nation')

            html.innerHTML = data;

            

        })
    })

let data = {
    Nation : "United States",
    Year : 2021,
    Population : 329725481,
    tag : function(){},
    bark(){}
}

data.Nation;
data.tag = function(){

}
