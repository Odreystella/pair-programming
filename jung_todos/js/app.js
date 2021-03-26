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

// id를 자동으로 증가시켜주는 함수 
const updateId = () => Math.max(...todos.map(todo => todo.id),0)+1;

// content내용 자동으로 추가시켜주는 함수 
const updateContent = () => $inputTodo.value;

// Todos내용 가져오기 
const getTodos = () => {
  todos = [{id:updateId(),content:updateContent(),completed:false},...todos];
  render(); 
  $activeTodos.textContent = todos.length; // items left 숫자 증가 
};

// form 태그의 이벤트 onsubmit이용해서 enter를 누르면 todos에 내용추가
$form.onsubmit = (e) => {
  e.preventDefault();
  if($inputTodo.value == '')return; //input비어있는 상태일때 
  const content = $inputTodo.value;
  updateContent(content);
  getTodos();
  $inputTodo.value = '';
}
  

// document.addEventListener('DOMContentLoaded',getTodos);  


