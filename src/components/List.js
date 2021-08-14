import React, { useState } from 'react';

const List = () => {
const [todos, setTodos] = useState([
    {text: "EXAMPLE TASK A", isComplete: false},
    {text: "EXAMPLE TASK B", isComplete: false},
    {text: "EXAMPLE TASK C", isComplete: false},
    {text: "EXAMPLE TASK D", isComplete: false},
]);

const Todo = () => {


    const handleComplete = (index) => {
        const newTodos = [...todos];
        let target = newTodos[index];
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
        <div className="todo-container">
            {todos.map((todo, index) => {

                return (  
                <div 
                className="todo-entry"
                style={{textDecoration: todo.isComplete ? "line-through" : ""}}>
                    <h2 key={index}>{todo.text}</h2>
                    <div className="control-panel">
                        <button onClick={() => handleComplete(index)}>✔️ </button>
                    </div>
                </div>
                )
              
            })}
        </div>
    )
}

const TodoForm = () => {
    const [value, setValue] = useState("");

const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
}

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

    return (
        <div>
            <Todo />
            <TodoForm />
        </div>
    );
};

export default List;