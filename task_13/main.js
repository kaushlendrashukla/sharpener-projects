
document.getElementById('my-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value;
   
    const obj = {
        name,
        email
    }
   console.log(obj)
    axios.post('https://crudcrud.com/api/402476c9b3e2451da05a7810ed0b41f8/appointmentsData',obj)
    .then((response)=> {
        displaydata([response.data]);
        console.log(response)
    })
    .catch((err) => {
        console.log(err)
    })
   
})

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
    });
    new_add.append(span1, span2,del)
    document.querySelector('.items').append(new_add)
})
}



 
