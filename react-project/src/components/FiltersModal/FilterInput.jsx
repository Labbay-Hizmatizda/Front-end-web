import React, { useState } from "react";
import styles from "./FiltersModal.module.scss";

export const FilterInput = ({ item, setFilters }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    setFilters((prevFilters) => ({
      ...prevFilters,
      [item]: newValue,
    }));
  };

  return (
    <input
      type="search"
      placeholder={item}
      className={styles.input}
      value={value}
      onChange={handleChange}
    />
  );
};
