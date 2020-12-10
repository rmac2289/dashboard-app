import React, { useState } from "react";
import styles from "../styles/todo.module.css";
import { TextField, IconButton } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TodoItem from "./todoItem";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");
  const getTask = (e) => {
    setTask(e.target.value);
  };
  const addToList = (e) => {
    e.preventDefault();
    setTodoList([...todoList, task]);
    setTask("");
  };
  const removeTask = (v) => {
    const idx = todoList.indexOf(v);
    todoList.splice(idx, 1);
    setTodoList([...todoList]);
  };

  return (
    <div className={styles.box}>
      <div className={styles.top}>
        <h2 className={styles.todoHeader}>To do</h2>
        <div className={styles.addTodo}>
          <TextField
            required={true}
            style={{ color: "white" }}
            fullWidth={true}
            value={task}
            onChange={getTask}
          />
          <IconButton
            size="medium"
            style={{ padding: "0" }}
            onClick={addToList}
          >
            <AddCircleIcon
              fontSize="large"
              style={{ padding: ".25rem" }}
              color="primary"
            />
          </IconButton>
        </div>
      </div>
      {todoList.map((v, i) => {
        return <TodoItem key={i} listItem={v} removeTask={removeTask} />;
      })}
    </div>
  );
};

export default TodoList;
