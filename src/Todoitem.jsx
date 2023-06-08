export function Todoitem({completed,id,title, toggleTodos, deleteTodo}) {
    return (
        <li key={id}>
        <label>
            <input type="checkbox" checked={completed} onChange={e => toggleTodos(id, e.target.completed)}/>
            {title}
        </label>
        <button 
            onClick={() => deleteTodo(id)}
            className="btn btn-danger">Delete</button>
        </li>
    )
}