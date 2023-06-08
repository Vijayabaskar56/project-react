import { useState } from "react";

export function NewTodoForm({ Submit }) {
    const[newItem, setNewItem] = useState("");

        
    const handleSubmit = (e) => {
    e.preventDefault()
    if (newItem === "") return

    Submit(newItem)
    setNewItem("");
}
    
    return (
    <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
    <label htmlFor="item" >New Item</label>
    <input type="text" value={newItem} 
        onChange={e => setNewItem(e.target.value)} 
        id="item" placeholder="" />
    </div>
    <button className="btn">Add</button>
    </form>
)
}