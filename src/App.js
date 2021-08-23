import { useState, useCallback, useRef } from 'react'
import { append, update, filter } from 'ramda'
import  Gradient  from 'javascript-color-gradient'
import { v4 as uuid } from 'uuid'
import  './main.scss'


import './App.css'
import TodoList from './TodoList'

function App() {
  const inputRef = useRef()

  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()

    setInputValue('')
    inputRef.current.focus()

    setTodos(append({
      key: uuid(),
      title: inputValue,
      archived: false,
    }))
  }, [inputValue])

  return <div className="app">
    <form onSubmit={ handleSubmit }>
      <input
        className='todo-input'
        ref={ inputRef }
        type={'text'}
        value={ inputValue }
        onChange={ (e) => setInputValue(e.target.value) }
        placeholder={'Enter todo'}
      />

      <input
        className='todo-add'
        type={'submit'}
        value={'Добавить'}
      />
    </form>

    <div className="main-todo">
      <TodoList
        items={ todos }
        onChange={ (item, index) => setTodos(update(index, item)) }
      />
    </div>

    <footer>
      <button className='todo-button' onClick={() => {
        setTodos(filter(({ archived }) => !archived))
      } }><i className='bx bxs-minus-square'></i></button>
    </footer>

    <div className="d-flex flex-column justify-content-center w-100 h-100">
      <div className="d-flex flex-column justify-content-center align-items-center">


      </div>
    </div>


  </div>
}

export default App
