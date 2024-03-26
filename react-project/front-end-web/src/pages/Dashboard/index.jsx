// import React from "react";
import styles from "./Dashboard.module.scss";

export const Dashboard = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Dashboard</h1>
      <div className={styles.table}>
        <div className={styles.tableHeaders}></div>
        <div className={styles.tableItem}></div>
      </div>
    </section>
  );
};
