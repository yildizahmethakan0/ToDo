import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]); // Görev nesnesi oluştur
      setInput(""); // Input alanını temizle
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, taskIndex) => {
      if (taskIndex === index) {
        return { ...task, completed: !task.completed }; // Görevin tamamlanma durumunu değiştir
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <h1>Hakan's To-Do List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span
              onClick={() => toggleTaskCompletion(index)}
              style={{
                textDecoration: task.completed ? "line-through" : "none", // Tamamlandıysa üstü çizili
                cursor: "pointer",
              }}
            >
              {task.text}
            </span>
            <button className="delete" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
