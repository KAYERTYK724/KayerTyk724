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
function spreadOut (){
    let failure = ['to', 'code'];
    let sentence = ['learning', ...failure, 'is', 'fun'];
    return sentence;
}
console.log(spreadOut());