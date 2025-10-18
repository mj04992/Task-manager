function Taskform() {
    return (
    <form>

        <div>
            <input type="text" placeholder="enter a task"/>
            <button type="submit">Add Task</button>
        </div>
        <div>
            <select>
                <option value="high">High</option>
                 <option value="medium">Medium</option>
                  <option value="low">Low</option>
            </select>

            <select>
                <option value="general">Generel</option>
                <option value="work">work</option>
                <option value="personel">Personel</option>
            </select>
        </div>
    </form>
    )
}
export default Taskform;