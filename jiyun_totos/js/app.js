// State
let todos = [];
const $todos = document.querySelector('.todos'); // ul 요소 노드 가리킴
const $inputTodo = document.querySelector('.input-todo'); // input 요소 노드 가리킴
const $form = document.querySelector('.form'); // form 요소 노드 가리킴

// id생성 함수
const generateId = () => {
  return Math.max(...todos.map((todo) => todo.id), 0) + 1;
};

// 데이터 렌더링 함수, HTML만들고 DOM에 반영
const render = () => {
  $todos.innerHTML = todos.map(({ id, content, completed }) => { 
    return `<li id ="${id}" class="todo-item">
    <input id="ck-${id}" class="checkbox" type="checkbox" ${completed ? "checked" : ''}>
    <label for="ck-${id}">${content}</label>
    <i class="remove-todo far fa-times-circle"></i>
    </li>`
  }).join('');
  console.log(todos)
};

// 데이터 초기화 함수, id는 내림차순 정렬
const getTodo = () => {
  todos = [  
      { id: 1, content: 'HTML', completed: false },
      { id: 2, content: 'CSS', completed: true },
      { id: 3, content: 'Javascript', completed: false }
    ].sort(( todo1, todo2 ) => todo2.id - todo1.id);
  render();
};

// DOM이 완성되면 getTodo 호출
document.addEventListener('DOMContentLoaded', getTodo);

// 신규데이터 추가 함수
const addTodo = (content) => {
  todos = [{id: generateId(), content, completed: false }, ...todos];
  render();
};

// input data 삭제 및 포커스
$form.onsubmit = e => {
  e.preventDefault();

  const content = $inputTodo.value; // input data 가리킴
  $inputTodo.value = '';
  $inputTodo.focus();
  
  addTodo(content); 
};




