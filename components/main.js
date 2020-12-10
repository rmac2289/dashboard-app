import React, { useEffect, useState } from "react";
import styles from "../styles/main.module.css";
import Weather from "../components/weather";
import Top from "../components/top";
import TodoList from "../components/todo";
import News from "./news";
import { calendar, calendarKey, calendarId } from "../config";
import ApiCalendar from "react-google-calendar-api";

const Main = ({ news, weather }) => {
  return (
    <div className={styles.grid}>
      <Top />
      <Weather weather={weather} />
      <div className={styles.largeBox}>
        <button onClick={(e) => handleItemClick(e, "sign-in")}>sign-in</button>
        <button onClick={(e) => handleItemClick(e, "sign-out")}>
          sign-out
        </button>
      </div>
      <TodoList />
      <News news={news} className={styles.lastBox} />
    </div>
  );
};

export default Main;
