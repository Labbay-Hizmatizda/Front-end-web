import React, { useEffect, useState } from "react";
import { TableHeaders } from "../TableHeaders";
import { TableRow } from "../TableRow";
import styles from "./Table.module.scss";
import { EmptyData } from "../EmptyData";
import { FiltersModal } from "../FiltersModal";

export const Table = ({ title, table_headers, data }) => {
  const [keys, setKeys] = useState([]);
  const [filtersModalVisible, setFiltersModalVisible] = useState(false);
  useEffect(() => {
    if (data.length) {
      setKeys(Object.keys(data[0]));
    }
  }, [data]);

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.flexWrapper}>
          <h1 className={styles.title}>{title}</h1>
          {data.length > 0 && (
            <button
              className={styles.openFilters}
              onClick={() => setFiltersModalVisible(true)}
            >
              filters
            </button>
          )}
        </div>
        {(data.length > 0 && (
          <>
            <div className={styles.headers}>
              <TableHeaders list={table_headers} />
            </div>
            {data.map((row) => (
              <div className={styles.row} key={row.id}>
                <TableRow data={row} />
              </div>
            ))}
          </>
        )) || <EmptyData />}
      </div>
      {filtersModalVisible && (
        <FiltersModal
          setFiltersModalVisible={setFiltersModalVisible}
          keys={keys}
        />
      )}
    </section>
  );
};
