import React from "react";
import styles from "./TableRow.module.scss";
import { TableRowImageBtn } from "./TableRowImageBtn";
import { TableRowText } from "./TableRowText";

export const TableRow = ({ data }) => {
  const approves = ["is_approved", "employee_approve", "employer_approve"];

  return (
    <div className={styles.wrapper}>
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className={styles.column}>
          {key === "images_dir" ? (
            <TableRowImageBtn img={value} />
          ) : value.length > 15 ? (
            <TableRowText text={value} />
          ) : (
            value
          )}

          {/* Todo: change */}
          {approves.includes(key) ? (
            value ? (
              <span className={styles.greenText}>Approved</span>
            ) : (
              <span className={styles.redText}>Pending</span>
            )
          ) : (
            key === "is_active" &&
            (value ? (
              <span className={styles.greenText}>Active</span>
            ) : (
              <span className={styles.redText}>Not Active</span>
            ))
          )}
        </div>
      ))}
    </div>
  );
};
