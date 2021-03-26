let count = 0;
let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];

function countCompletedTodos(){
  todos.filter(todo => { todo.completed  ? count++ : count})
  return count;
}  
// const countCompletedTodos = () => {
//   todos.filter(todo => { todo.completed === true ? count++ : count})
//   return count;
// };
  
console.log(countCompletedTodos()); // 1