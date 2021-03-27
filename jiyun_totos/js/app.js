// State
let todos = [];
const $todos = document.querySelector('.todos');

// 데이터 렌더링 함수, HTML만들고 DOM에 반영
const render = () => {
  $todos.innerHTML = todos.map(({ id, content, completed }) => { 
    return `<li id ="${id}" class="todo-item">
    <input id="ck-${id}" class="checkbox" type="checkbox" ${completed ? "checked" : ''}>
    <label for="ck-${id}">${content}</label>
    <i class="remove-todo far fa-times-circle"></i>
    </li>`
  }).join('');
};

// 데이터 초기화 함수, id는 내림차순 정렬
const getTodo = () => {
  todos = [  
      { id: 1, content: 'HTML', completed: false },
      { id: 2, content: 'CSS', completed: true },
      { id: 3, content: 'Javascript', completed: false }
    ].sort(( todo1, todo2 ) => todo2.id - todo1.id);
    console.log(todos)
    render();
};

document.addEventListener('DOMContentLoaded', getTodo);