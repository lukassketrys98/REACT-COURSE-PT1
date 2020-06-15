import React from 'react';
import TodoItem from './components/TodoItem'
import todosData from './todosData'


function App() {
  const todoComponent = todosData.map(todo =>  {
    return(
      <TodoItem key = {todo.id} todo = {todo}/>
    )
  })
  return (
    <div className = "todo-list">
    
    {todoComponent}
  
    </div>
  );
}

export default App;
