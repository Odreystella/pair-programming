
let todos = [];
const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $form = document.querySelector('.form');
const $activeTodos = document.querySelector('.active-todos');


const render = () => {
    $todos.innerHTML = todos.map(({id,content,completed}) => {
        return `<li id="${id}" class="todo-item">
        <input id="ck-${id}" class="checkbox" type="checkbox"${completed ? 'checked':''}>
        <label for="ck-${id}">${content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>`
    }).join('');
    $activeTodos.textContent = todos.length; // items left 숫자 증가 
}

// id를 자동으로 증가시켜주는 함수 
const updateId = () => Math.max(...todos.map(todo => todo.id),0)+1;

// content내용 자동으로 추가시켜주는 함수 
const updateContent = () => $inputTodo.value;

// todo 내용 추가해주는 함수 
const addTodo = () => {
  todos = [{id:updateId(),content:updateContent(),completed:false},...todos];
  render(); 
};

// form 태그의 이벤트 onsubmit이용해서 enter를 누르면 todos에 내용추가
$form.onsubmit = (e) => {
  e.preventDefault();
  if($inputTodo.value == '')return; //input비어있는 상태일때 
  const content = $inputTodo.value;
  updateContent(content);
  addTodo();
  $inputTodo.value = '';
}

// todo내용 제거해주는 함수
const removeTodo = (id) => {
  todos = todos.filter(todo => todo.id !== +id);
  render();

}

// todos 이벤트 위임으로 선택한 li id 가져온다
$todos.onclick = e => {
  if(!e.target.classList.contains('remove-todo')) return;
  const id = e.target.parentNode.id;
  removeTodo(id);
}


// document.addEventListener('DOMContentLoaded',getTodos);  
