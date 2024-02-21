import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function ToDoList() {
  let [todos, setToDos] = useState([{ task: "Code", id: uuidv4() }]);
  let [newToDo, setNewToDos] = useState([""]);

  function addTask() {
    setToDos([...todos, { task: newToDo, id: uuidv4() }]);
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
      <hr />
      <h4>Tasks To-Do</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}
