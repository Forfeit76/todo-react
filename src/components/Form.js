import React from 'react';

const Form = ({setInputText, inputText, todos, setTodos, setStatus}) => {
    const inputTextHandler = (event) => {
        setInputText(event.target.value);
    }
    const submitTodoHandler = (event) => {
        event.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000 },
        ]);
        setInputText("");
    }
    const statusHandler = (event) => {
        setStatus(event.target.value);
    }
    return (
    <form>
        <input value={inputText} onChange={inputTextHandler} className="todo-input" type="text"></input>
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select onChange={statusHandler} className="todo-filter" name="todos">
                <option value="all">All Tasks</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
    );
}

export default Form;