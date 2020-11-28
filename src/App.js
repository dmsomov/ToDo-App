import { func } from 'prop-types'
import React, { useState } from 'react'
import TodoList from './Todo/TodoList'
import Context from './Context'

function App() {

  const [todos, setTodos] = useState([
    {id: 1, done: false, title: 'qweq'},
    {id: 2, done: false, title: 'qweq'},
    {id: 3, done: false, title: 'qweq'}
  ])

  function toggleTodo(id) {
    setTodos(
      todos.map( todo => {
        if (todo.id === id) {
          todo.done = !todo.done
        }
      return todo
    }))
  }
  
  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className='wrapper'>
      <h1>ToDo App</h1>
      <TodoList todos={todos} onToggle={toggleTodo} />
      </div>
    </Context.Provider>
    )}

export default App;
