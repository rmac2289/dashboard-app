import React from "react";
import styles from "../styles/weather.module.css";

const Weather = ({ weather }) => {
  const tempTemp = weather.main.temp.toString();
  const tempFeelsLike = weather.main.feels_like.toString();
  const temp = `${tempTemp[0]}${tempTemp[1]}`;
  const feelsLike = `${tempFeelsLike[0]}${tempFeelsLike[1]}`;
  return (
    <div className={styles.box}>
      {weather.weather ? (
        <>
          <h2 className={styles.header}>
            {weather.name}{" "}
            <img
              style={{
                backgroundColor: "rgba(0,0,0,0.4)",
                borderRadius: "50%",
              }}
              width="60"
              height="60"
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            />
          </h2>
          <p className={styles.p}>
            It's <u className={styles.u}>{temp}˚ outside</u> with{" "}
            {weather.weather[0].description[
              weather.weather[0].description.length - 1
            ] === "s"
              ? ""
              : "a"}{" "}
            <u className={styles.u}>{weather.weather[0].description}</u>, but it{" "}
            <u className={styles.u}>feels like {feelsLike}˚,</u>
            with <u className={styles.u}>
              {" "}
              {weather.clouds.all}% cloud cover
            </u>{" "}
            and <u className={styles.u}>{weather.main.humidity}% humidity.</u>
          </p>
        </>
      ) : (
        <h3>Weather Loading</h3>
      )}
    </div>
  );
};

export default Weather;
