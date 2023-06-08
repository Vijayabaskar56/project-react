import { Todoitem } from "./Todoitem"

export function Todolist({ todos,toggleTodos,deleteTodo }) {



    return (
        <ul className="list">
            {todos.length === 0 && "No Todo's"}
            {todos.map(todo => {
        return (
            <Todoitem {...todo} key={todo.id} toggleTodos={toggleTodos} deleteTodo={deleteTodo}/>
        )    
    })}
    </ul>
    )
}