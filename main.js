var form = document.getElementById('addform');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup',filteritems);

//add item
function addItem(e)
{
 e.preventDefault();

 // get input value
 var new_add = document.getElementById('newadd').value;
 var newitem = document.getElementById('item').value;
 //ceate new li element
 var li = document.createElement('li');
 //add class
 li.className = 'list-group-item';
 //add text node with input value
li.appendChild(document.createTextNode(newitem +" "+ new_add))
//ceate the del. button element
var delbtn = document.createElement('button')
var editbtn = document.createElement('button')

// add classes to button
editbtn.className = 'btn btn-danger btn-sm float-right ';
editbtn.appendChild(document.createTextNode('edit'));

delbtn.className = 'btn btn-danger btn-sm float-right delete';
delbtn.appendChild(document.createTextNode('delete'));

li.appendChild(editbtn)
li.appendChild(delbtn)

itemList.appendChild(li);
itemList.appendChild(li);
};

function removeItem(e)
{
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure ?'))
        {
            var li  = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filteritems(e)
{
    //lowercase me convert kna hy
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li')
    Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;

    if(itemName.toLocaleLowerCase().indexOf(text) != -1){
        item.style.display = 'block'
    }
    else{
        item.style.display = 'none'
    }
    });
}