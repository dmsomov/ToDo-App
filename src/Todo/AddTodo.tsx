import React, { useState } from 'react'
import PropTypes from 'prop-types'

const styles: { form: object, button: object} = {
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    padding: '1rem',
    backgroundColor: '#61C0BF',
    width: '60%',
    borderRadius: '5px'
  },
  button: {
    marginLeft: '1rem'
  }
}

function AddTodo({ createTodo }: { createTodo: any }) {
  const [value, setValue] = useState('')

  function changeValue(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }

  function submitValue(e: { preventDefault: () => void }) {
    e.preventDefault()

    if (value.trim()) {
      createTodo(value)
      setValue('')
    }
  }

  return (
    <form style={styles.form} onSubmit={submitValue}>
      <input value={value} onChange={changeValue} />
      <button type='submit' style={styles.button} >Add Todo</button>
    </form>
  )
}

AddTodo.propTypes = {
  createTodo: PropTypes.func.isRequired
}

export default AddTodo