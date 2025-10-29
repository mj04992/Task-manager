import Taskform from "./Components/Taskform";
import TaskList from "./Components/TaskList";
import Progresstracker from "./Components/Progresstracker";
import { useEffect, useState } from "react";
import "./Style.css"
function App() {
  const [tasks, setTasks] = useState([]);

  // Load tasks on first render
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks when changed
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearAll = () => {
    setTasks([]);
  };

  return (
    <div>
      <h1>Task Focus</h1>
      <p>Our friendly task manager</p>
      <Taskform addTask={addTask} />
      <TaskList
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
      <Progresstracker tasks={tasks} />
      <button onClick={clearAll}>Clear all tasks</button>
    </div>
  );
}

export default App;
