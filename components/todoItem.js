import React from "react";
import styles from "../styles/todo.module.css";
import { useToggle } from "../hooks/toggle";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import { Checkbox, IconButton } from "@material-ui/core";

const TodoItem = ({ removeTask, listItem }) => {
  const [isToggled, setToggle, toggle] = useToggle(false);

  return (
    <div className={styles.taskDiv}>
      <div className={styles.checkBox}>
        <Checkbox color="primary" onClick={toggle} />
        <p className={styles.todoText}>{listItem}</p>
      </div>
      <IconButton
        size="small"
        color="inherit"
        onClick={() => removeTask(listItem)}
      >
        <IndeterminateCheckBoxIcon color="secondary" />
      </IconButton>
    </div>
  );
};

export default TodoItem;
