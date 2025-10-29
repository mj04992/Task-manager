import { useState } from "react";

function Taskform({ addTask }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("General");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    if (!text.trim()) return; // avoid empty tasks

    // Create a new task object
    const newTask = {
      text,
      priority,
      category,
      completed: false,
    };

    addTask(newTask); // send task to App.jsx
    setText(""); // clear input
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </div>

      <div>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="General">General</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
      </div>
    </form>
  );
}

export default Taskform;
