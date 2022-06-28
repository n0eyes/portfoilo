import React from "react";
import styles from "../../styles/Loading.module.css";
function Loading() {
  return (
    <>
      <div className={`${styles["loading-box"]} ${styles.top}`} />
      <div className={`${styles["loading-box"]} ${styles.bottom}`} />
    </>
  );
}

export default Loading;
