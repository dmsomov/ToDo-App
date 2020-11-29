import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

// interface styleTypes {
//   display: string,

// }

const styles: { ul: object} = {
  ul: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    listStyle: 'none',
    margin: '0 auto',
    padding: 0
  }
}

interface TodoListProp {
  todos: any[],
  onToggle: (...args: any[]) => any
}

// function TodoList(props: { todos: any[]; onToggle: (...args: any[]) => any }) {
const TodoList: React.FC<TodoListProp> = props => {
  return (
    <ul style={styles.ul}>
      {props.todos.map( (todo, ind) => {
        return <TodoItem 
          todo={todo} 
          key={todo.id} 
          index={ind} 
          onChange={props.onToggle}
        />
      })}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
}

export default TodoList