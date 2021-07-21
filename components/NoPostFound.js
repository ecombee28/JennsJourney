import React from "react";
import style from "../styles/NoPostFound.module.css";

const NoPostFound = () => {
  return (
    <div className={style.main_container}>
      <div className={style.wrapper}>
        <p className={style.title}>Coming Soon!</p>
      </div>
    </div>
  );
};

export default NoPostFound;
