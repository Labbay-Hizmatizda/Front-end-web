/* eslint-disable react-hooks/exhaustive-deps */
// import React from "react";
import { useEffect } from "react";
import AppService from "../../services";
import styles from "./Employees.module.scss";
import { useState } from "react";

export const Employees = () => {
  const [data, setData] = useState([]);
  const api = new AppService();

  useEffect(() => {
    api.getEmployees().then((data) => {
      setData(data);
    });
  }, []);

  console.log("Employees => ", data);

  return (
    <section className={styles.section}>
      <table className={styles.table}></table>
    </section>
  );
};
