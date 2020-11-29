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

type Todo = {
  id: number, 
  done: boolean, 
  title: string
}

interface TodoItemProps {
  todo: Todo,
  index: number,
  onChange: (...args: any) => void
}

// function TodoItem({ todo, index, onChange }: { todo: any, index: number, onChange: (...args: any[]) => any }) {
const TodoItem: React.FC<TodoItemProps> = ({todo, onChange, index}) => {
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
        checked ={todo.done}
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

export default TodoItem