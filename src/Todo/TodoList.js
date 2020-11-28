import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const styles = {
  ul: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    listStyle: 'none',
    margin: '0 auto',
    padding: 0
  }
}

function TodoList(props) {
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