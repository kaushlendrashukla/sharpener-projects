window.addEventListener("DOMContentLoaded",()=>{
    axios.get('https://crudcrud.com/api/402476c9b3e2451da05a7810ed0b41f8/appointmentsData')
    .then(res=>{
        console.log(res.data)
        displaydata(res.data)
    })
    .catch(err=>console.log(err))
})

const getMethod=()=>{
    
    axios.get('https://crudcrud.com/api/402476c9b3e2451da05a7810ed0b41f8/appoinmentData')
    .then(res=>{
       // console.log("shukla")
        console.log(res.data);
        displaydata(res.data);
    })
    .catch(err=>console.log(err));
  }
  
  document.getElementById('my-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value;
   
    const obj = {
        name,
        email
    }
        axios.post('https://crudcrud.com/api/402476c9b3e2451da05a7810ed0b41f8/appointmentsData',obj)
    .then(res=>getMethod())
    .catch((err) => {
        document.body.innerHTML= document.body.innerHTML +"<h4>Soething went Wrong</h4>"
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
          axios.delete(`https://crudcrud.com/api/402476c9b3e2451da05a7810ed0b41f8/appointmentsData/${el._id}`)
          //.then(console.log("kaushlendra"))
          .then(res=>getMethod());
       });
       new_add.append(span1, span2,del)
       document.querySelector('.items').append(new_add)
   })
   }


 
