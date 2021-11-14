import './App.css';
import TodoList from "./Widgets/TodoList";
import React,{useEffect} from 'react';
import Context from './Services/context';
import Loader from './Services/loader'
import Modal from "./Modals/modal";

const AddToDo = React.lazy(() => import('./Widgets/AddToDo'))

function App() {
    const [todos, setTodos] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTimeout(() => {
                    setTodos(todos)
                    setLoading(false)
                }, 2000)
            })
    }, [])
    function toggleTodo(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            }))}

    const indexNow = todos.length? todos.sort()[todos.length-1].id + 1: 1

    function removeTodo(id){
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title) {
        setTodos(todos.concat([{
            title,
            id: indexNow,
            completed: false
        }]))
    }

  return (
      <Context.Provider value={{removeTodo}}>
          <div  className="wrapper">
              <h1 className="chapter">React Suck</h1>
              <Modal/>
              <React.Suspense fallback={<p title="...loading"/>}>
                  <AddToDo Create={addTodo}/>
              </React.Suspense>
              {loading && <Loader/>}
              {todos.length ?
                  <TodoList todos={todos} onToggle={toggleTodo}/>
                  :(loading? null :
                      <p>No More ToDo</p>)
              }
          </div>
      </Context.Provider>
  )
}

export default App;
