import { useEffect, useState } from "react";
import AppService from "../../services";
import styles from "./Employers.module.scss";
import { TableHeaders } from "../../components/TableHeaders";
import { TableRow } from "../../components/TableRow";

export const Employers = () => {
  const table_headers = [
    "id",
    "user id",
    "name",
    "surname",
    "phone number",
    "created date",
  ];
  const [data, setData] = useState([]);
  const api = new AppService();

  useEffect(() => {
    api.getEmployers().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Employers</h1>
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
