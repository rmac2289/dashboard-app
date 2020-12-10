import React from "react";
import styles from "../styles/top.module.css";
import { format } from "date-fns";

const Top = () => {
  const date = format(new Date(), `EEEE,MMMM,do,yyyy`).split(",");

  return (
    <div className={styles.longBox}>
      <div className={styles.topContainer}>
        <h1 className={styles.topTextH1}>
          {date[0]} the {date[2]}
        </h1>
        <h2 className={styles.topTextH2}>
          of {date[1]}, {date[3]}
        </h2>
      </div>
      <div className={styles.imageContainer}></div>
    </div>
  );
};

export default Top;
