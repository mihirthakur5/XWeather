import React from "react";
import styles from "./WeatherCard.module.css";

const WeatherCard = ({ title, data }) => {
  return (
    <div className={styles.weatherCard}>
      <h3>{title}</h3>
      <p>{data}</p>
    </div>
  );
};

export default WeatherCard;
