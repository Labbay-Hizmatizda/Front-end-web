import React, { useEffect, useState } from "react";
import styles from "./FiltersModal.module.scss";

export const FilterInput = ({ item, setFilters, filters }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    // Доделать фильтры
    setFilters();
  }, [value]);

  return (
    <input
      type="search"
      placeholder={item}
      className={styles.input}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
