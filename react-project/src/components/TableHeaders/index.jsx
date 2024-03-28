import React from "react";
import styles from "./TableHeaders.module.scss";

export const TableHeaders = ({ list }) => {
  return (
    <div className={styles.wrapper}>
      {list.map((header, index) => (
        <h4 key={index} className={styles.header}>
          {header}
        </h4>
      ))}
    </div>
  );
};
