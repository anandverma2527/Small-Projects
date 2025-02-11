import React, { useState } from 'react';

export function Todo() {
  const [task, setTask] = useState(''); 
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) { 
      setTasks([...tasks, task]); 
      setTask(''); 
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); 
    setTasks(updatedTasks);
    console.log(index)
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => handleRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
