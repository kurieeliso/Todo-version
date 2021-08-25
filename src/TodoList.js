import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default function TodoList({ items, onChange }) {
  return <TransitionGroup className="todo-list">
    { items.map(({ key, title, archived }, index) => (
      <CSSTransition
        key={ key }
        timeout={ 500 }
        classNames="item"
      >
        <div className="todo-row item" key={ key }>
          <span className="todo-title">{ title }</span>
          <input
            className="todo-checked"
            type={ 'radio' }
            key={ 'color' }
            checked={ archived }
            onChange={ (e) => {
              onChange({
                key, title, archived: e.target.checked,
              }, index)
            } }
          />
        </div>
      </CSSTransition>
    )) }
  </TransitionGroup>
}
