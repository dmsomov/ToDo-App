import React, { useContext } from 'react'
import Context from '../Context'

const styles = {
  li: {
    display: 'flex',
    width: '60%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ABEDD8',
    borderRadius: '5px',
    marginTop: '.5rem',
    backgroundColor: '#A8E6CF'
  },
  input: {
    marginRight: '1rem'
  }
}

interface TodoItemProps {
  todo: any,
  index: number,
  onChange: (...args: any[]) => any
}

// function TodoItem({ todo, index, onChange }: { todo: any, index: number, onChange: (...args: any[]) => any }) {
const TodoItem: React.FC<TodoItemProps> = props => {
  const { removeTodo } = useContext(Context)
  const classes = []

  if (props.todo.done) {
    classes.push('done')
  }

  return (
  <li style={styles.li}>
    <span className={classes.join(' ')}>
      <input 
        type='checkbox'
        checked ={props.todo.done}
        style={styles.input} 
        onChange={() => props.onChange(props.todo.id)}
      />
      <strong>{props.index + 1}</strong>
      &nbsp;
      {props.todo.title}
    </span>
    <button onClick={() => removeTodo(props.todo.id)}>Done</button>
    </li>
  )
}

export default TodoItem