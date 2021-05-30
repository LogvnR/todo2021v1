const listContainer = document.querySelector('.listContainer');
const todoForm = document.querySelector('#todoForm');
const mainInput = document.querySelector('.mainInput');
const todoPreview = document.querySelector('.todoPreview');
const trashCan = document.querySelector('.trashBtn');

// ===== Todo Input Submit
todoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const todoInput = todoForm.elements.todoInput;
  addTodo(todoInput.value);
  todoInput.value = '';
  todoPreview.innerText = 'New To-Do';
});

// ===== Adds New Todo
const addTodo = (todoInput) => {
  const newTodo = document.createElement('li');
  const newTrash = document.createElement('i');
  const newText = document.createElement('h3');
  newTrash.className = 'fas fa-trash-alt trashBtn';
  newText.className = 'todoText';
  newText.append(todoInput);
  newTodo.append(newTrash);
  newTodo.append(newText);
  listContainer.append(newTodo);
  localStorage.setItem('todos', listContainer.innerHTML);
};

// ===== Gets Data From Local Storage and updates page =====
let saved = localStorage.getItem('todos');

if (saved) {
  listContainer.innerHTML = saved;
}
// ===========

// ===== Todo Remover
listContainer.addEventListener('click', function (e) {
  e.target.nodeName === 'I' && e.target.parentNode.remove();
  localStorage.setItem('todos', listContainer.innerHTML);
});

// ===== Todo Completed
listContainer.addEventListener('click', function (e) {
  e.target.nodeName === 'LI' && e.target.classList.toggle('completed');
  localStorage.setItem('todos', listContainer.innerHTML);
});

// ===== Todo Previewer
mainInput.addEventListener('input', function (e) {
  todoPreview.innerText = this.value ? `${mainInput.value}` : 'New To-Do';
});
