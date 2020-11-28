import React, { useState } from 'react'
import PropTypes from 'prop-types'

const styles = {
  form: {
    marginBottom: '1rem',
  }
}

function AddTodo({ createTodo }) {
  const [value, setValue] = useState('')

  function changeValue(e) {
    setValue(e.target.value)
  }

  function submitValue(e) {
    e.preventDefault()

    if (value.trim()) {
      createTodo(value)
      setValue('')
    }
  }

  return (
    <form style={styles.form} onSubmit={submitValue}>
      <input value={value} onChange={changeValue} />
      <button type='submit'>Add Todo</button>
    </form>
  )
}

AddTodo.propTypes = {
  createTodo: PropTypes.func.isRequired
}

export default AddTodo