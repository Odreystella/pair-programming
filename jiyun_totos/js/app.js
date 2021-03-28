// State
let todos = [];
const $todos = document.querySelector('.todos'); // ul 요소 노드 가리킴
const $inputTodo = document.querySelector('.input-todo'); // input 요소 노드 가리킴
const $form = document.querySelector('.form'); // form 요소 노드 가리킴

// id생성 함수
const generateId = () => {
  return Math.max(...todos.map((todo) => todo.id), 0) + 1;
};

// completed 갯수 세는 함수
let countCompletedTodo = () => {
  return todos.filter(todo => todo.completed).length;
};

// 데이터 렌더링 함수, HTML만들고 DOM에 반영, 렌더되면 completed 갯수, 할일 남은 갯수 업데이트
const render = () => {
  $todos.innerHTML = todos.map(({ id, content, completed }) => { 
    return `<li id ="${id}" class="todo-item">
    <input id="ck-${id}" class="checkbox" type="checkbox" ${completed ? "checked" : ''}>
    <label for="ck-${id}">${content}</label>
    <i class="remove-todo far fa-times-circle"></i>
    </li>`
  }).join('');
  console.log(todos);
  document.querySelector('.completed-todos').textContent = countCompletedTodo();
  document.querySelector('.active-todos').textContent = todos.length - countCompletedTodo();
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

// 데이터 삭제 함수
const removeTodo = (id) => {
  todos = todos.filter(todo => todo.id !== +id );
  render();
};

// 할일 1개 지우기 버튼 누르면 데이터 삭제하기
// li요소 노드 마다 이벤트를 발생하지 않고 ul인 부모 노드에 이벤트 발생
$todos.onclick = e => {
  if (!e.target.classList.contains('remove-todo')) return;
  
  const { id } = e.target.parentNode;
  removeTodo(id);
}; 

// checkbox 상태 변경 함수
const toggleTodo = id => {
  todos = todos.map(todo => todo.id === +id ? { ...todo, completed: !todo.completed } : todo);
  render(); 
};

// checkbox 바뀌면 completed 값이 변경되는 이벤트 발생
$todos.onchange = (e) => { 
  const { id } = e.target.parentNode;
  toggleTodo(id);
};

// mark all complete as true
const completeAllTrue = () => { todos = todos.map(todo => ({...todo, completed: true}) ); };

// mark all complete as false
const completeAllFalse = () => { todos = todos.map(todo => ({...todo, completed: false}) ); };

// mark all as complete 버튼 누르면 전체 선택 or 해지되는 이벤트 발생
document.querySelector('.complete-all').onchange = (e) => {
  e.target.checked ? completeAllTrue() : completeAllFalse();
  render();
};
