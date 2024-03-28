import React from "react";
import { TableHeaders } from "../TableHeaders";
import { TableRow } from "../TableRow";
import styles from "./Table.module.scss";

export const Table = ({ title, table_headers, data }) => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.headers}>
          <TableHeaders list={table_headers} />
        </div>
        {data.map((row) => (
          <div className={styles.row}>
            <TableRow data={row} key={row.id} />
          </div>
        ))}
      </div>
    </section>
  );
};
