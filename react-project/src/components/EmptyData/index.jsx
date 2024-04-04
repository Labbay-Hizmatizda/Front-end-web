import React from "react";
import img from "../../assets/images/empty_data.png";
import styles from "./EmptyData.module.scss";

export const EmptyData = () => {
  return (
    <div className={styles.wrapper}>
      <img src={img} alt="img" className={styles.img} />
    </div>
  );
};
