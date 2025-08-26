let expenses = [];

function addExpense() {
  const title = document.getElementById('title').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const category = document.getElementById('category').value;

  if (!title || isNaN(amount)) return alert('Enter valid details');

  expenses.push({ title, amount, category });

  // clear inputs
  document.getElementById('title').value = '';
  document.getElementById('amount').value = '';

  render();
}

function deleteExpense(index) {
  expenses.splice(index, 1);
  render();
}

function render() {
  let list = document.getElementById('list');
  list.innerHTML = '';
  let total = 0;

  // ✅ using simple for loop
  for (let i = 0; i < expenses.length; i++) {
    let exp = expenses[i];
    total += exp.amount;
    list.innerHTML += `
      <tr>
        <td data-label="Title"><span>${exp.title}</span></td>
        <td data-label="Category"><span>${exp.category}</span></td>
        <td data-label="Amount"><span>${exp.amount}</span></td>
        <td data-label="Action"><button onclick="deleteExpense(${i})">Delete</button></td>
      </tr>`;
  }

  document.getElementById('total').textContent = total;
}
