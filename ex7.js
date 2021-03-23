let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  
  const toggleCompletedAll = () => { todos = todos.map(todo => todo.completed === false ? {...todo, completed: !todo.completed} : {...todo}); };
     
  toggleCompletedAll();
  
  console.log(todos);
  
  // console.log(toggleCompletedAll());
  /*
  [
    { id: 3, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: true }
  ]
  */