import React, { useState, useReducer } from 'react'

const TYPES = {
  ADD: 'add',
  UPDATE: 'update',
  DELETE: 'delete',
}

const initialTodos = [
  { id: 1, title: 'Todo #1' },
  { id: 2, title: 'Todo #2' },
]

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.DELETE:
      return state.filter((todo) => todo.id !== action.payload)

    case TYPES.ADD:
      return [...state, action.payload]

    case TYPES.UPDATE:
      const todoEdit = action.payload
      return state.map((todo) => (todo.id === todoEdit.id ? todoEdit : todo))

    default:
      return state
  }
}

const TodoApp = () => {
  const [todos, dispatch] = useReducer(reducer, initialTodos)
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = { id: Date.now(), title: text }

    dispatch({
      type: TYPES.ADD,
      payload: newTodo,
    })
  }

  return (
    <div>
      <h1>TodoApp</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => dispatch({ type: TYPES.DELETE, payload: todo.id })}>Delete</button>
            <button onClick={() => dispatch({ type: TYPES.UPDATE, payload: { ...todo, title: text } })}>Update</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input placeholder='To Do' value={text} onChange={(e) => setText(e.target.value)} />
      </form>
    </div>
  )
}

export default TodoApp
