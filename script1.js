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
fetch("https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students")
    .then(function(response){
        response.json().then(function(data){
            console.log(data);
            let array = data;

            let tbody = `<table class="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">TÊN</th>
                    <th scope="col">HÌNH ẢNH</th>
                    <th scope="col">THỜI GIAN </th>
                </tr>
                </thead>`;

            for (let {id, name, avatar, createdAt} of array){
                tbody += `<tr>
                <th scope="row">${id}</th>
                <td>${name}</td>
                <td>${avatar}</td>
                <td>${createdAt}</td>
                </tr>`;
                    
            }
            tbody += `</tbody>
            </table>`;

            app.innerHTML = tbody;

            
        })
    })


