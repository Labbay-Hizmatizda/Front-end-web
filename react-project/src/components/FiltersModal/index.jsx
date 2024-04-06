import React, { useState } from "react";
import styles from "./FiltersModal.module.scss";
import { FilterInput } from "./FilterInput";

export const FiltersModal = ({ keys, setFiltersModalVisible }) => {
  const filtersList = [
    "user_id",
    "name",
    "surname",
    "phone_number",
    "owner_id",
    "card_holder",
    "rating",
    "category",
    "price",
    "order_id",
    "proposal_id",
    "job_id",
    "employer_id",
    "rate",
  ];

  const [filters, setFilters] = useState({});
  console.log(filters);

  return (
    <div
      className={styles.wrapper}
      onClick={() => setFiltersModalVisible(false)}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>Filters</h2>
        <div className={styles.inputs}>
          {keys.map(
            (key) =>
              filtersList.includes(key) && (
                <FilterInput
                  item={key}
                  key={key}
                  setFilters={setFilters}
                  filters={filters}
                />
              )
          )}
        </div>
        <button className={styles.submit} onClick={() => console.log(filters)}>
          search
        </button>
      </div>
    </div>
  );
};
