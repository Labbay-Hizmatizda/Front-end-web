import React, { useEffect, useState } from "react";
import { TableHeaders } from "../TableHeaders";
import { TableRow } from "../TableRow";
import styles from "./Table.module.scss";
import { EmptyData } from "../EmptyData";
import { FiltersModal } from "../FiltersModal";
import AppService from "../../services";
import { useSelector } from "react-redux";

export const Table = ({ title, table_headers, page }) => {
  const [keys, setKeys] = useState([]);
  const [isDataFiltered, setIsDataFiltered] = useState(false);
  const [filtersModalVisible, setFiltersModalVisible] = useState(false);
  const language = useSelector((state) => state.language.lang);
  const [tableHeaders, setTableHeaders] = useState(table_headers[language]);
  const [data, setData] = useState([]);
  const api = new AppService();

  useEffect(() => {
    api.getData(`/${page}`).then((r) => setData(r));
  }, []);

  useEffect(() => {
    if (data.length) {
      setKeys(Object.keys(data[0]));
    }
  }, [data]);

  useEffect(() => {
    setTableHeaders(table_headers[language]);
  }, [language]);

  const filtersBtn = () => {
    if (isDataFiltered) {
      api
        .getData(`/${page}`)
        .then((r) => setData(r))
        .then(() => setIsDataFiltered(false));
    } else {
      setFiltersModalVisible(true);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.flexWrapper}>
          <h1 className={styles.title}>{title}</h1>
          {!data.length && !isDataFiltered ? (
            ""
          ) : (
            <button className={styles.openFilters} onClick={filtersBtn}>
              {isDataFiltered ? "clear" : "filters"}
            </button>
          )}
        </div>
        {(data.length && (
          <>
            <div className={styles.headers}>
              <TableHeaders list={tableHeaders} />
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
          page={page}
          setData={setData}
          setIsDataFiltered={setIsDataFiltered}
        />
      )}
    </section>
  );
};
