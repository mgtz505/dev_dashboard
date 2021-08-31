import React, { useState } from 'react';
import "../styles/list.css";
import Count from "./Count";
import ModalContainer from './ModalContainer';


const Todo = ({ todo, index, handleComplete, handleDelete, displayIndex }) => {
    return (
        <div className="todoContainer">
                <div 
                style={{textDecoration: todo.isComplete ? "line-through" : ""}}
                >               
                    <h3 key={index}> {displayIndex ? index + 1 + ")" : null} {todo.text}</h3>
                        <button className="function-button--todoBtn" onClick={() => handleComplete(index)}>✔️</button>
                        <button className="function-button--todoBtn" onClick={() => handleDelete(index)}>🗑</button>
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
        <div>
            <form
            onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="New Task..."
                value={value}
                onChange={(e) => setValue(e.target.value)}>
                </input>
            </form>
        </div>
    )
}
const List = () => {
const [todos, setTodos] = useState([]);
const [count, setCount] = useState(0);
const [displayIndex, setDisplayIndex] = useState(false);

const description = "As simple as it gets: a handy list to help you tackle (and mark-off) today's tasks.";
const details = ["Click on the bold check mark to toggle an item on your list as complete", "Clicking on the trash bin will remove the task from the list", "You can apply numerical headers to your list by clicking the numbers button"];

const addTodo = (text, isComplete = false) => {
    const newTodos = [...todos, { text, isComplete}];
    setTodos(newTodos);
    setCount(newTodos.length);
}
const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
    setCount(newTodos.length);
}

const handleComplete = (index) => {
    const newTodos = [...todos];
    let target = newTodos[index];
    if (target.isComplete === false) {
        target.isComplete = true;
    } else {
        if (target.isComplete === true) {
            target.isComplete = false;
        };
    }
    setTodos(newTodos);
}
    return (
        <div className="widgit-tall">
            <div className="banner-container">
            <h2>Tasks to Complete</h2>
            <ModalContainer title="To Do List" header="What Needs to Get Done?" description={description} details={details} />
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