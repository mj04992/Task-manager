import Taskform from "./Components/Taskform"
import TaskList from "./Components/TaskList"
import Progresstracker from "./Components/Progresstracker"
function App() {
  return (
    <div>
    <h1>Task Focus</h1>
    <p>Our firendly task manager</p>
    <Taskform />
    <TaskList />
    <Progresstracker />
    <button>clear all tasks</button>
    </div>
  )
}
export default App;