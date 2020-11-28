import { func } from 'prop-types'
import React, { useState } from 'react'
import TodoList from './Todo/TodoList'
import Context from './Context'
import AddTodo from './Todo/AddTodo'

function App() {

  const [todos, setTodos] = useState([
    {id: 1, done: false, title: 'Example'},
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

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      done: false
    }]))

  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className='wrapper'>
      <h1>ToDo App</h1>
      <AddTodo createTodo={ addTodo } />
      <TodoList todos={todos} onToggle={toggleTodo} />
      </div>
    </Context.Provider>
    )}

export default App;
