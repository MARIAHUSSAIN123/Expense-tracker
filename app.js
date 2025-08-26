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

  // ✅ using for...of loop
  let index = 0;
  for (const exp of expenses) {
    total += exp.amount;
    list.innerHTML += `
      <tr>
        <td data-label="Title"><span>${exp.title}</span></td>
        <td data-label="Category"><span>${exp.category}</span></td>
        <td data-label="Amount"><span>${exp.amount}</span></td>
        <td data-label="Action"><button onclick="deleteExpense(${index})">Delete</button></td>
      </tr>`;
    index++; // manually track index
  }

  document.getElementById('total').textContent = total;
}
