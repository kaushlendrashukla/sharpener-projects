//localStorage.setItem('name','shukla')

//  ---------------------------------TASK 10
// function savedata(){
// var name = document.getElementById('name').value;
// var email = document.getElementById('email').value;

// localStorage.setItem("name",name)
// localStorage.setItem("email",email)
// };

// ----------------------------------TASK 11

// function savedata() {

//     let data = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value
//     }
//     localStorage.setItem("users", JSON.stringify(data));

// };

// --------------------------------   TASK 12

// function savedata() {
//     var name = document.getElementById('name').value
//     var email= document.getElementById('email').value
//         let multiple_user = new Array();
//         multiple_user=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
//         multiple_user.push({
//             "name": name,
//             "email": email
//         })
//         localStorage.setItem(multiple_user.email , JSON.stringify(multiple_user));

//     };
var itemList = document.getElementById('items');
let arr=JSON.parse(localStorage.getItem('formdata')) ||[];
function savedata() {
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value;
   
    const obj = {
        name,
        email
    }
   // arr.push(obj);
    axios.post('https://crudcrud.com/api/402476c9b3e2451da05a7810ed0b41f8/appointmentsdata',obj)
    .then((response)=> {
        console.log(response)
    })
    .catch((err) => {
        console.log(err)
    })
    // data.push(obj)
    // (localStorage.setItem('formdata', JSON.stringify(data)))
    // if (data.some((v) => { return v.email == email })) {
    //     alert("already registered")
    // }
    // else{
    //     arr.push(obj);
    //     axios.post("https://crudcrud.com/api/402476c9b3e2451da05a7810ed0b41f8/appointmentsdata",obj)
    //     .then((response)=> {
    //         console.log(response)
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    //     //(localStorage.setItem("formdata", JSON.stringify(arr)))
    // }
}
let data = JSON.parse(localStorage.getItem('formdata')) || [];
displaydata(data);
function displaydata(data){
 document.querySelector('.items').innerText=null;
data.map((el,index) => {
    let new_add = document.createElement('li')
    let span1 = document.createElement('span')
    let span2 = document.createElement('span')
    let del    =document.createElement('button')
    new_add.className = 'item';
    span1.innerText = el.name
    span2.innerText = el.email;
    del.innerHTML = "delet user"
    del.className = 'delbtn'
    del.addEventListener('click',()=>{
        data.splice(index,1)
        localStorage.setItem('formdata',JSON.stringify(data))
      
        displaydata(data)
    })
    new_add.append(span1, span2,del)
    document.querySelector('.items').append(new_add)

})
}



 
