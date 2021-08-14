import React, { useState } from 'react';

const Todo = () => {
const [todos, setTodos] = useState([
    {text: "EXAMPLE TASK A"},
    {text: "EXAMPLE TASK B"},
    {text: "EXAMPLE TASK C"},
    {text: "EXAMPLE TASK D"},
]);
const [value, setValue] = useState("");

const Todo = () => {
    
    return (
        <div className="todo-container">
            {todos.map((todo, index) => {

                return (  
                <div className="todo-entry">
                    <h2 key={index}>{todo.text}</h2>
                </div>)
              
            })}
        </div>
    )
}

const todoForm = () => {

    return (
        <div className="todo-form">
            <form>
                <input 
                type="text"
                onChange={(e) => setValue(e.target.value)}
                >
                </input>
            </form>
        </div>
    )
}

    return (
        <div>
            <Todo />
        </div>
    );
};

export default Todo;