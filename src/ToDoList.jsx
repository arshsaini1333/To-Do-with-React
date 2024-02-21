import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function ToDoList() {
  let styles = { textDecoration: "line-through" };

  let [todos, setToDos] = useState([
    { task: "Code", id: uuidv4(), isDone: false },
  ]);
  let [newToDo, setNewToDos] = useState([""]);

  //Adding Task
  function addTask() {
    setToDos((prevToDos) => {
      return [...prevToDos, { task: newToDo, id: uuidv4(), isDone: false }];
    });
    setNewToDos("");
  }

  //Deleting Task
  function deleteToDO(id) {
    setToDos((prevToDos) => {
      return prevToDos.filter((todo) => todo.id != id);
    });
  }

  //Setting Task Value
  let updateToDoValue = (event) => {
    setNewToDos(event.target.value);
  };
  //Updating Functionality
  let upperCaseAll = () => {
    setToDos((prevToDos) =>
      prevToDos.map((todo) => {
        return { ...todo, task: todo.task.toUpperCase() };
      })
    );
  };

  //Updating one element
  let upperCaseOne = (id) => {
    setToDos((prevToDos) =>
      prevToDos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, task: todo.task.toUpperCase() };
        } else {
          return { ...todo };
        }
      })
    );
  };

  //Is task Done
  let isTaskDone = (id) => {
    setToDos((prevToDos) =>
      prevToDos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isDone: true };
        } else {
          return { ...todo };
        }
      })
    );
  };
  //All Done
  let isAllDone = () => {
    setToDos((prevToDos) =>
      prevToDos.map((todo) => {
        return { ...todo, isDone: true };
      })
    );
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
          <li key={todo.id}>
            {todo.isDone ? (
              <span style={styles}>{todo.task}</span>
            ) : (
              <span>{todo.task}</span>
            )}
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => deleteToDO(todo.id)}>Delete</button>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => isTaskDone(todo.id)}>Mark as Done</button>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <button onClick={isAllDone}>All Done</button>
    </div>
  );
}
