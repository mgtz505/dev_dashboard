import React, { useState } from 'react';
import "../styles/list.css";

const Count = ({ count }) => {
    return (
        <div className="count-container">
            {count ? 
            (count === 1 ? <h4>{count} task remaining</h4> : <h4>{count} tasks remaining</h4> )
            : <h4>No Tasks Remaining</h4>}

        </div>
    )
}

const Todo = ({ todo, index, handleComplete, handleDelete, displayIndex }) => {
    return (
        <div className="todo-container">
                <div 
                className="todo-entry"
                style={{textDecoration: todo.isComplete ? "line-through" : ""}}
                >
                   
                    <h2 key={index}> {displayIndex ? index + 1 + ")" : null} {todo.text}</h2>
                    <div className="control-panel">
                        <button className="function-button" onClick={() => handleComplete(index)}>✔️</button>
                        <button className="function-button" onClick={() => handleDelete(index)}>🗑</button>
                    </div>
                </div>
        </div>
    )
}
const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");


const handleSubmit = (e) => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue("");
}

    return (
        <div className="todo-form">
            <form
            onSubmit={handleSubmit}>
                <input
                className="todo-input" 
                type="text"
                placeholder="New Task..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                >
                </input>
            </form>
        </div>
    )
}
const List = () => {
const [todos, setTodos] = useState([
    // {text: "EXAMPLE TASK A", isComplete: false},
    // {text: "EXAMPLE TASK B", isComplete: false},
    // {text: "EXAMPLE TASK C", isComplete: false},
    // {text: "EXAMPLE TASK D", isComplete: false},
]);
const [count, setCount] = useState(0);
const [displayIndex, setDisplayIndex] = useState(false);

const addTodo = (text, isComplete = false) => {
    const newTodos = [...todos, { text, isComplete}];
    setTodos(newTodos);
    setCount(newTodos.length);
}
const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
    setCount(newTodos.length)
}

const handleComplete = (index) => {
    console.log(index)
    const newTodos = [...todos];
    let target = newTodos[index];
    console.log(target)
    if (target.isComplete === false) {
        target.isComplete = true
    } else {
        if (target.isComplete === true) {
            target.isComplete = false
        }
    }
    setTodos(newTodos);
}
    return (
        <div className="widgit">
            <h2>Tasks to Complete</h2>
            <Count count={count}/>
            {todos.map((todo, index) => {
                return (
                    <Todo
                    index={index}
                    todo={todo}
                    handleComplete={handleComplete}
                    handleDelete={handleDelete}
                    displayIndex={displayIndex} />
                )
            })}
            <TodoForm
            addTodo={addTodo} />
            <button className="function-button" onClick={() => setDisplayIndex(!displayIndex)}>🔢 </button>
        </div>
    );
};

export default List;