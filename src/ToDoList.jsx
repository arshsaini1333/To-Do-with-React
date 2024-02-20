import { useState } from "react";
export default function ToDoList() {
  let [todos, setToDos] = useState(["Code"]);
  let [newToDo, setNewToDos] = useState([""]);

  function addTask() {
    setToDos([...todos, newToDo]);
    setNewToDos("");
  }
  let updateToDoValue = (event) => {
    setNewToDos(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Add Task"
        value={newToDo}
        onChange={updateToDoValue}
      />
      <br /> <br />
      <button onClick={addTask}>Add</button>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <h4>Tasks To-Do</h4>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
