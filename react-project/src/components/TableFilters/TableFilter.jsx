import React, { useEffect, useState } from "react";
import styles from "./TableFilters.module.scss";
import AppService from "../../services";

export const TableFilter = ({ value, style, url, setData }) => {
  const api = new AppService();
  const [search, setSearch] = useState("");
  useEffect(() => {
    search.length > 0 &&
      api
        .getFilteredData(url, value, search)
        .then((newData) => setData(newData));
  }, [search]);
  return (
    <>
      <input
        type="search"
        placeholder={value}
        className={styles.input}
        key={value}
        style={style}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
};
