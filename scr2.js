//
let name = "Trương Hoàng Diễm Ái";
let app = document.getElementById("PC05853");
// arrow function
let baiTap = function(){
    console.log(`${name}, ${app}`);
}
//
baiTap();
//
const source = [1,2,3,4,5,6,7,8,9,10];
//
function removeFirstTwo(list) {
    const listCopy = [...list]; 
    const [a, b, arr] = listCopy; 
    return arr;
}
//
const arr = removeFirstTwo(source);
console.log(arr) 
console.log(source)