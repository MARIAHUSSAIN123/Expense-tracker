let expenses = [];


function addExpense(){
const title = document.getElementById('title').value;
const amount = parseFloat(document.getElementById('amount').value);
const category = document.getElementById('category').value;
if(!title || isNaN(amount)) return alert('Enter valid details');


expenses.push({title, amount, category});
document.getElementById('title').value = '';
document.getElementById('amount').value = '';
render();
}


function deleteExpense(index){
expenses.splice(index,1);
render();
}


function render(){
let list = document.getElementById('list');
list.innerHTML = '';
let total = 0;
expenses.forEach((exp,i)=>{
total += exp.amount;
list.innerHTML += `<tr>
<td data-label="Title">${exp.title}</td>
<td data-label="Category">${exp.category}</td>
<td data-label="Amount">${exp.amount}</td>
<td data-label="Action"><button onclick="deleteExpense(${i})">Delete</button></td>
</tr>`;
});
document.getElementById('total').textContent = total;
}