import React, { useState } from 'react';

export function Todo() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  
  // Helper to generate unique task IDs
  const generateId = () => '_' + Math.random().toString(36).substr(2, 9);

  const handleAddTask = () => {
    if (task.trim()) { 
      const newTask = { id: generateId(), text: task };
      setTasks([...tasks, newTask]); 
      setTask('');
    }
  };

  const handleRemoveTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id); 
    setTasks(updatedTasks);
  };

  return (
    <div className="container my-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h1 className="card-title text-center mb-4">To-Do List</h1>
          
          {/* Input Section */}
          <div className="d-flex mb-4">
            <input
              type="text"
              className="form-control me-2"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter a new task"
            />
            <button className="btn btn-success" onClick={handleAddTask}>Add Task</button>
          </div>
          
          {/* Task List */}
          <ul className="list-group">
            {tasks.map((task) => (
              <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
                <span>{task.text}</span>
                <button 
                  className="btn btn-danger btn-sm" 
                  onClick={() => handleRemoveTask(task.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
