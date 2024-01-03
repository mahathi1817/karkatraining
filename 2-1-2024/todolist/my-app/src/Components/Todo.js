import React, { useState, useEffect } from 'react';

export const Todo=()=> {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  //Update local storage whenever TODOs change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);
  useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>TO-DO List</h1>
        <div className="todo-input">
          <input
            type="text"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>
        
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <div className='box'><div><li key={index}>
              {todo}</li></div><div><input type='checkbox' className='cbox' /><button className='del' onClick={() => handleRemoveTodo(index)}>Remove</button></div></div>
          ))}
        </ul>
      

       <div></div>
      </header>
    </div>
  );
}
export default Todo;