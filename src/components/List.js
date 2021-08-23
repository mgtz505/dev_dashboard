import React, { useState } from 'react';
import "../styles/list.css";
import Count from "./Count";

const Todo = ({ todo, index, handleComplete, handleDelete, displayIndex }) => {
    return (
        <div className="todo-container">
                <div 
                className="todo-entry"
                style={{textDecoration: todo.isComplete ? "line-through" : ""}}
                >               
                    <h2 key={index}> {displayIndex ? index + 1 + ")" : null} {todo.text}</h2>
                    <div className="control-panel">
                        <button className="function" onClick={() => handleComplete(index)}>✔️</button>
                        <button className="function" onClick={() => handleDelete(index)}>🗑</button>
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
const [todos, setTodos] = useState([]);
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
            <div className="banner-container">
            <h2>Tasks to Complete</h2>
            </div>
            <Count count={count}/>
            <TodoForm
            addTodo={addTodo} />
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
            {todos.length >= 1 ? <button className="function-button" onClick={() => setDisplayIndex(!displayIndex)}>🔢 </button> : null}
        </div>
    );
};

export default List;