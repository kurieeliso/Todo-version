export default function TodoList({ items, onChange }) {
  return items.map(({ key, title, archived }, index) => <div className='todo-row' key={ key }>
    <span className='todo-title'>{ title }</span>
    <input
      className='todo-checked'
      type={ 'radio' }
      key= {'color'}
      checked={ archived }
      onChange={ (e) => {
        onChange({
          key, title, archived: e.target.checked,
        }, index)
      } }
    />

  </div>)
}
