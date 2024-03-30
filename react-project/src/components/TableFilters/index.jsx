import React from "react";
import styles from "./TableFilters.module.scss";
import { TableFilter } from "./TableFilter";

export const TableFilters = ({ keys, setData, url }) => {
  const style = {
    width: `calc(100% / ${keys.length} - 16px)`,
  };

  return (
    <div className={styles.wrapper}>
      {keys?.map((key) => (
        <TableFilter
          value={key}
          style={style}
          key={key}
          setData={setData}
          url={url}
        />
      ))}
    </div>
  );
};
