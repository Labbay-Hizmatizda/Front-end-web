import React from "react";
import styles from "./TableRow.module.scss";

export const TableRow = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className={styles.column}>
          {value}
        </div>
      ))}
    </div>
  );
};
