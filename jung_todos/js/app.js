let todos = [];
const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $form = document.querySelector('.form');
const $activeTodos = document.querySelector('.active-todos');


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
    ].sort((todo1,todo2)=> todo2.id - todo1.id);
    render(); 
  };

// id를 자동으로 증가시켜주는 함수 
const updateId = () => Math.max(...todos.map(todo => todo.id),0)+1;

// 내용추가해주는 함수
const addTodo = content => {
  todos = [{id:updateId(), content,completed:false},...todos];
  render();
  $activeTodos.textContent = todos.length; // items left 숫자
}

// form 태그의 이벤트 onsubmit이용해서 enter를 누르면 todos에 내용추가
$form.onsubmit = (e) => {
  e.preventDefault();
  if($inputTodo.value == '')return; //input비어있는 상태일때 

  const content = $inputTodo.value;
  $inputTodo.value = '';
  addTodo(content);
}
  

document.addEventListener('DOMContentLoaded',getTodos);  


