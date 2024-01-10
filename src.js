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
const result = {
    success: ["max-length", "no-and", "prefeer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
//
function mokeList(arr) {
    return arr.map(item => `<li class="text-warning">${item}</li>`).join('');
}
// 
const failuresList = mokeList(result.failure);
// 
console.log(failuresList);
[
    `<li class="text-warning">no-var</li>`,
    `<li class="text-warning">var-on-top</li>`,
    `<li class="text-warning">linebreak</li>`,
]