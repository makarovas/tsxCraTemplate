import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const TodoList = () => {
  const {page, error, limit, loading, todos } = useTypedSelector(state => state.todo)
  const { fetchTodos, setTodoPage } = useActions()
  const pages = [1, 2, 3, 4 , 5]
  
  useEffect(()=> {
    fetchTodos(page, limit)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[page])

  return (
    <div>
      {loading && !page && <div>loading</div>}
      {error && <div>{error}</div>}
      {page && !loading&& (
      <>
        <ul>
          {todos.map((todo, i ) => <li key={`${todo.id}-${todo}`}>{todo.id}-{todo.title}</li>)}
        </ul>
        <div style={{display: 'flex',}}>
          {pages.map((p,i) => 
          <div 
            onClick={()=> setTodoPage(p)}
            key={`${i}-${p}`} 
            style={
              {
                border: p === page ? '2px solid green': '1px solid grey',
                width: '40px'
              }}>
            {p}
          </div>)}
        </div>
      </>)
      }
    </div>
  )
    
}

export default TodoList
