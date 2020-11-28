import React from 'react'
import PropTypes from 'prop-types'

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

function TodoItem({ todo, index }) {
  return (
  <li style={styles.li}>
    <span>
      <input type='checkbox' style={styles.input}/>
      <strong>{index + 1}</strong>
      &nbsp;
      {todo.title}
    </span>
    <button>Done</button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number
}

export default TodoItem