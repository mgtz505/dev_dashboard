import React, { useState } from 'react';
import "../styles/list.css";
import Count from "./Count";
import ModalContainer from './ModalContainer';


const Todo = ({ todo, index, handleComplete, handleDelete, displayIndex }) => {
    return (
        <div className="todo-container">
                <div 
                className="todo-entry"
                style={{textDecoration: todo.isComplete ? "line-through" : ""}}
                >               
                    <h3 key={index}> {displayIndex ? index + 1 + ")" : null} {todo.text}</h3>
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
        <div className="widgit-tall">
            <div className="banner-container">
            <h2>Tasks to Complete</h2>
            <ModalContainer />
            </div>
            <Count count={count}/>
            <TodoForm
            addTodo={addTodo} />
            {todos.length >= 1 ? <button className="function-button" onClick={() => setDisplayIndex(!displayIndex)}>🔢 </button> : null}
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
        </div>
    );
};

export default List;