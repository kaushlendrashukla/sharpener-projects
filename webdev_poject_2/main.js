window.addEventListener("load",()=>{

  axios.get('https://crudcrud.com/api/ab04cee3a55a4cc18d1de458d2b94f25/ExpenseData')
  .then(res=>{
     displayData(res.data)
  })
  .catch(err=>console.log(err));
});

const getData=()=>{

  axios.get('https://crudcrud.com/api/ab04cee3a55a4cc18d1de458d2b94f25/ExpenseData')
  .then(res=>{
      console.log(res.data)
      displayData(res.data)
  })
  .catch(err=>console.log(err));
}
const displayData = (formData) => {

  document.getElementById('items').innerHTML = null;
  formData.map((el, index) => {
    var divflex = document.createElement('div');
    var div1 = document.createElement('div');
    div1.setAttribute('style', 'display:flex;justify-content:left;');
    divflex.setAttribute('style', 'display:flex;justify-content:space-between;');
    var list = document.createElement('li');
    list.setAttribute('class', 'list-group-item')
    var p1 = document.createElement('h2');
    var p2 = document.createElement('h2');
    var p3 = document.createElement('h2');

    p1.innerText = `${el.expenseamount} -`;
    p2.innerText = `${el.description} -`;
    p3.innerText = el.category;
    div1.append(p1, p2, p3);
    var div2 = document.createElement('div');
    div2.setAttribute('style', 'display:flex;gap:15px;');
    let btnDelete = document.createElement('button');
    btnDelete.innerText = 'delete';
    btnDelete.style.backgroundColor ="red";
    btnDelete.style.color = "white"
    btnDelete.addEventListener('click', () => {
      
     axios.delete(`https://crudcrud.com/api/ab04cee3a55a4cc18d1de458d2b94f25/ExpenseData/${el._id}`)
     .then(res=>getData()) 
      
    })
    let btnEdit = document.createElement('button');

    btnEdit.innerText = 'Edit'
    document.getElementById('udateBtn').style.display = "none";

    btnEdit.addEventListener('click', function () {

      document.getElementById('submitBtn').style.display = "none";
      document.getElementById('udateBtn').setAttribute('style', 'width:15%;');
      document.getElementById('udateBtn').style.display = "block";
      document.getElementById('expenseamount').value = el.expenseamount;
      document.getElementById('description').value = el.description;
      document.getElementById('category').value = el.category;

      document.getElementById('udateBtn').addEventListener('click', function () {

        document.getElementById('submitBtn').style.display = "block";
        document.getElementById('udateBtn').style.display = "none";
        let expenseamount = document.getElementById('expenseamount').value;
        let description = document.getElementById('description').value;
        let category = document.getElementById('category').value;
        let obj={
              expenseamount,
              description,
              category
           };
           
           axios.put(`https://crudcrud.com/api/ab04cee3a55a4cc18d1de458d2b94f25/ExpenseData/${el._id}`,obj)
           .then(res=>getData())
           .catch(err=>console.log(err));

      })
    })
    div2.append(btnDelete, btnEdit);
    divflex.append(div1, div2)
    list.append(divflex);
    document.getElementById('items').append(list);
  })
}


// Add new Data list------------------------------

var form = document.querySelector('.form-inline');
form.addEventListener('submit', (e) => {

  e.preventDefault();
  let items = document.querySelectorAll('.list-group-item');
  let expenseamount = form.expenseamount.value;
  let description = form.description.value;
  let category = form.category.value;

  let obj = {
    expenseamount,
    description,
    category
  }
  axios.post('https://crudcrud.com/api/ab04cee3a55a4cc18d1de458d2b94f25/ExpenseData',obj)
  .then(res=>getData())
  .catch(err=>console.log(err));
 
});
