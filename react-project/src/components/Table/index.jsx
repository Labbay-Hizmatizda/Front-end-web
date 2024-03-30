import React, { useEffect, useState } from "react";
import { TableHeaders } from "../TableHeaders";
import { TableRow } from "../TableRow";
import { TableFilters } from "../TableFilters";
import styles from "./Table.module.scss";

export const Table = ({ title, table_headers, data }) => {
  const [keys, setKeys] = useState([]);
  useEffect(() => {
    if (data.length) {
      setKeys(Object.keys(data[0]));
    }
  }, [data]);

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.headers}>
          <TableHeaders list={table_headers} />
        </div>
        <TableFilters keys={keys} />
        {data.map((row) => (
          <div className={styles.row} key={row.id}>
            <TableRow data={row} />
          </div>
        ))}
      </div>
    </section>
  );
};
