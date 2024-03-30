import React from "react";
import styles from "./TableFilters.module.scss";

export const TableFilters = ({ keys }) => {
  const style = {
    width: `calc(100% / ${keys.length} - 16px)`,
  };
  return (
    <div className={styles.wrapper}>
      {keys?.map((key) => (
        <input
          type="search"
          placeholder={key}
          className={styles.input}
          key={key}
          style={style}
        />
      ))}
    </div>
  );
};
