// State
let todos = [];
const $todos = document.querySelector('.todos')

const render = () => {
    $todos.innerHTML = todos.map(({id,content,completed}) => {
        return `<li id="${id}" class="todo-item">
        <input id="ck-${id}" class="checkbox" type="checkbox"${completed ? 'checkout':''}>
        <label for="ck-${id}">${content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>`
    }).join('');
}

const getTodos = () => {
    todos = [
      { id: 1, content: 'HTML', completed: false },
      { id: 2, content: 'CSS', completed: true },
      { id: 3, content: 'Javascript', completed: false }
    ]
    render(); //초기데이터 렌더링 (애플리케이션 키자마자 html에 생기는 데이터들)
  };


document.addEventListener('DOMContentLoaded',getTodos);  


