import { useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import { Todolist } from "./Todolist";

export default  function App() {
  const[todos,settodos] = useState([]);
  
  function toggleTodos(id, completed) {
    settodos(currenttodos => {
        return currenttodos.map(todo => {
            if(todo.id === id) {
                return {...todo, completed}
            }
            return todo
        })
        })
    }
    
    function deleteTodo(id) {
        settodos(currenttodos => {
            return currenttodos.filter(todo => todo.id !== id)
        })
    }

  function addTodo(title) {
    settodos(currenttodos => {
        return [
            ...currenttodos, {id: crypto.randomUUID(), title, completed: false },
        ]
    }) 
  }




  return <>
    <NewTodoForm Submit ={addTodo} />
    <h1 className="header">Todo List</h1>
    <Todolist todos={todos} toggleTodos={toggleTodos} deleteTodo={deleteTodo}/>    
  </>
}
