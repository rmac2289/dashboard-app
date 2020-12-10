import React from "react";
import styles from "../styles/news.module.css";
import { format } from "date-fns";

const News = ({ news }) => {
  const newsList = news.results.map((v, i) => {
    return (
      <div key={i} className={styles.newsItem}>
        <p className={styles.title}>
          <a href={v.url}>{v.title}</a>
        </p>
        <p className={styles.date}>
          {format(new Date(v.published_date), `M-dd-yyyy, h:mm a`)} -{" "}
          <span>{v.byline}</span>
        </p>
        <p className={styles.snippet}>{v.abstract}</p>
        <img
          width="400"
          src={v.multimedia[0].url}
          alt={v.multimedia[0].caption}
        />
      </div>
    );
  });
  return (
    <div className={styles.lastBox}>
      <h2 className={styles.newsHeader}>News</h2>
      {newsList}
    </div>
  );
};

export default News;
