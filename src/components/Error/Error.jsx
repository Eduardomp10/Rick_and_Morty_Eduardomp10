import React from "react";
import style from "./Error.module.css";

const Error = () => {
  return (
    <div className={style.container}>
      <h1 className={style.errorMessage}>Error 404</h1>
      <p className={style.errorText}>Page not found</p>
    </div>
  );
};

export default Error;