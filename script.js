const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementsByClassName('todo-extension');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = input.value;
    
    if (todo) {

        const todoEl = document.createElement('li');
        todoEl.innerText = todo;
        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
        });
        todos[0].appendChild(todoEl);
        input.value = '';

    }

});