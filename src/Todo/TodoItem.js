import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../Context'

const styles = {
  li: {
    display: 'flex',
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ABEDD8',
    borderRadius: '5px',
    marginBottom: '.5rem',
    backgroundColor: '#A8E6CF'
  },
  input: {
    marginRight: '1rem'
  }
}

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context)
  const classes = []

  if (todo.done) {
    classes.push('done')
  }

  return (
  <li style={styles.li}>
    <span className={classes.join(' ')}>
      <input 
        type='checkbox'
        checked={todo.done}
        style={styles.input} 
        onChange={() => onChange(todo.id)}
      />
      <strong>{index + 1}</strong>
      &nbsp;
      {todo.title}
    </span>
    <button onClick={() => removeTodo(todo.id)}>Done</button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

export default TodoItem