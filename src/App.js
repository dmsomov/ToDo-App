import React from 'react'
import TodoList from './Todo/TodoList'

function App() {

  const todos = [
    {id: 1, done: false, title: 'qweq'},
    {id: 2, done: false, title: 'qweq'},
    {id: 3, done: false, title: 'qweq'},
  ]

  return (
  <div className='wrapper'>
    <h1>ToDo App</h1>
    <TodoList todos={todos}/>
  </div>)
}

export default App;
