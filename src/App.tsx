import React, { useState } from 'react'
import TodoList from './Todo/TodoList'
import Context from './Context'
import AddTodo from './Todo/AddTodo'
import { IntTodo } from './components/interfaces'

const App: React.FC = () => {

  const [todos, setTodos] = useState<IntTodo[]>([
    {id: 1, done: false, title: 'Example'},
  ])

  function toggleTodo(id: number) {
    setTodos(
      todos.map( todo => {
        if (todo.id === id) {
          todo.done = !todo.done
        }
      return todo
    }))
  }
  
  function removeTodo(id: number) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title: string) {
    // setTodos(todos.concat([{
    //   title,
    //   id: Date.now(),
    //   done: false
    // }]))
    setTodos([...todos, 
      {
        title,
        id: Date.now(),
        done: false
      }])

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
