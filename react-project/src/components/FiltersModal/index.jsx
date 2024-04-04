import React from "react";
import styles from "./FiltersModal.module.scss";

export const FiltersModal = ({ keys, setFiltersModalVisible }) => {
  // todo: дописать фильтры
  const filters = [];
  return (
    <div
      className={styles.wrapper}
      onClick={() => setFiltersModalVisible(false)}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>Filters</h2>
      </div>
    </div>
  );
};
