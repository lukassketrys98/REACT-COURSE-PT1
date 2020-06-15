import React from 'react';
import TodoItem from './components/TodoItem'
import todosData from './todosData'


class App extends React.Component{

  constructor(){
    super()
    this.state = {
      todos: todosData
    }
  }

  
  render(){

    const todoComponent = this.state.todos.map(todo =>  {
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
  
}

export default App;
