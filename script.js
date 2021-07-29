//1.Asenkron Programlama

// const first = () => {
//     console.log("first");
//     second();
// }


// const second = () => {
//     setTimeout(() => {
//         console.log("second");
//     }, 2000);  
//     third();
// }

// const third = () => {
//     console.log("third");
// }

// first();


//2.AJAX kavramı ve  XMLHttpRequest(xhr objesi)

// var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status === 200){
//         console.log(xhr.responseText);
//     }
// }

// xhr.onprogress = function(){
//     console.log("on proggressing");
// }


// xhr.open('GET','msg.txt',true);
// xhr.send();




/*  readyState

0: request baslatılmamıs
1: server connection kurulmus
2: request, server tarafından alınmıs
3: request, serverda isletiliyor
4: request bitti ve sonuc hazır

*/


/* status

200: basarılı   
403: 403 hatası
404: 404 hatası

*/


//3-4. JSON ile çalışma

document.querySelector('#getEmployee').addEventListener('click',function(){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange  = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            var employee = JSON.parse(xhr.responseText);
            console.log(employee);

            var html = `
                <tr>
                    <td>${employee.firstname}</td>
                    <td>${employee.lastname}</td>
                    <td>${employee.age}</td>
                    <td>${employee.retired}</td>
                </tr>    
            `

            document.querySelector('#employees').innerHTML = html;
        }
    }

    xhr.open('GET','employee.JSON',true);
    xhr.send();
   
})


var gif = document.querySelector('#load-gif');
gif.style.display = "none";

document.querySelector('#getEmployees').addEventListener('click',function(){

    var gif = document.querySelector('#load-gif');
    gif.style.display = 'block';

    var xhr = new XMLHttpRequest();
    xhr.open('GET','employees.JSON',true);

    setTimeout(() => {
       
        xhr.onload = function(){

            gif.style.display = "none";

            if( xhr.status === 200){
               var employees = JSON.parse(xhr.responseText);
               employees.forEach(employee => {
                   
                var html = `
                <tr>
                    <td>${employee.firstname}</td>
                    <td>${employee.lastname}</td>
                    <td>${employee.age}</td>
                    <td>${employee.retired}</td>
                </tr>    
            `
                document.querySelector('#employees').innerHTML += html;
               });
            }
            
        }
        xhr.send();
    }, 1500);  
     
})




