import React from 'react';
import TodoItem from './components/TodoItem'
import todosData from './todosData'


class App extends React.Component{

  constructor(){
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
    
  }

  handleChange(id){
   
      this.setState(prevState =>{
    
        const updatedTodos = prevState.todos.map(todo =>{
          // console.log(todo)
          if(todo.id === id){
        

           return {
             ...todo,
             completed: !todo.completed
           }

            // console.log(todo)
          }
          return todo
        })
        // console.log(updatedTodos)
        console.log(prevState.todos)
        console.log(updatedTodos)
          return {
            todos: updatedTodos
          }
    
      })

  
  }
  
  render(){

    const todoComponent = this.state.todos.map(todo =>  {
      return(
        <TodoItem key = {todo.id} todo = {todo} handleChange = {this.handleChange}/>
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
