window.addEventListener("DOMContentLoaded",()=>{
    axios.get('https://crudcrud.com/api/752ce30de88b473e970b42ac5f7d445d/appoinmentData')
    .then(res=>{
        displaydata(res.data);
    })
    .catch(err=>console.log(err));
})

const getMethod=()=>{
    
    axios.get('https://crudcrud.com/api/752ce30de88b473e970b42ac5f7d445d/appoinmentData')
    .then(res=>{
        
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
   
    axios.post('https://crudcrud.com/api/752ce30de88b473e970b42ac5f7d445d/appoinmentData',obj)
    .then(res=>getMethod())
    .catch((err) => {
        document.body.innerHTML= document.body.innerHTML +"<h4>Spmthing went Wrong</h4>"
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
    let edit =document.createElement('button')
    new_add.className = 'item';
    span1.innerText = el.name
    span2.innerText = el.email;
    del.innerHTML = "delet user"
    del.className = 'delbtn'
 del.addEventListener('click',()=>{
       axios.delete(`https://crudcrud.com/api/752ce30de88b473e970b42ac5f7d445d/appoinmentData/${el._id}`)
       .then(res=>getMethod());
    });
    edit.innerText="edit"
    document.getElementById('update').style.display = "none";
    
    edit.addEventListener('click',()=>{
        document.getElementById('submitbtn').style.display ="none";
        document.getElementById('update').style.display ="block";
        document.getElementById('name').value=el.name;
        document.getElementById('email').value=el.email;
      document.getElementById('update').addEventListener('click',()=>{
        document.getElementById('submitbtn').style.display ="block";
        document.getElementById('update').style.display ="none";
        let name=document.getElementById('name').value;
        let email=document.getElementById('email').value;
       let obj={
        name,
        email
       }
        axios.put(`https://crudcrud.com/api/752ce30de88b473e970b42ac5f7d445d/appoinmentData/${el._id}`,obj)
        .then(res=>getMethod());
       })
       
    })
    new_add.append(span1, span2,del,edit)
    document.querySelector('.items').append(new_add)
})
}



 
