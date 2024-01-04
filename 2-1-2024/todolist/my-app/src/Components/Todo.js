import React, { useState, useEffect } from 'react';

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [editing, setEditing] = useState({ status: false, index: null, text: '' });

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

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

  const handleEditTodo = (index) => {
    const textToEdit = todos[index];
    setEditing({ status: true, index, text: textToEdit });
  };

  const handleUpdateTodo = () => {
    const updatedTodos = [...todos];
    updatedTodos[editing.index] = editing.text;
    setTodos(updatedTodos);
    setEditing({ status: false, index: null, text: '' });
  };

  useEffect(() => {
    const json = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem('todos', json);
  }, [todos]);

  const user=JSON.parse(localStorage.getItem("name"))

  return (
    <div className="App">
      <header className="App-header">
        <h1>TO-DO List</h1>
        <h5>Hi {user}! You can now add your todo lists...</h5>
        <div className="todo-input">
          <input
            type="text"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>

        <div className='list'>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index}>
              {editing.status && editing.index === index ? (
                <>
                  <input
                    type="text"
                    value={editing.text}
                    onChange={(e) => setEditing({ ...editing, text: e.target.value })}
                  />
                  <div className='updatebutton'>
                  <button onClick={handleUpdateTodo} className='update'>Update</button>
                  </div>
                </>
              ) : (
                <>
                  {todo}
                  <div className='editbutton'>
                  <button onClick={() => handleEditTodo(index)} className="edit">Edit</button>
                  </div>
                  <button onClick={() => handleRemoveTodo(index)} className="del">Remove</button>
                </>
              )}
            </li>
          ))}
        </ul>
        </div>
      </header>
    </div>
  );
};
export default Todo;
