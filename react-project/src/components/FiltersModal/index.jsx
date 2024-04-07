import React, { useState } from "react";
import styles from "./FiltersModal.module.scss";
import { FilterInput } from "./FilterInput";
import AppService from "../../services";

export const FiltersModal = ({
  keys,
  setFiltersModalVisible,
  page,
  setData,
}) => {
  const filtersList = [
    "id",
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

  const api = new AppService();

  const [filters, setFilters] = useState({});

  const handleSetFilters = (newFilters) => {
    setFilters(newFilters);
  };

  const getFilteredData = () => {
    let filterUrl = "";
    for (let key in filters) {
      filterUrl += `${key}=${filters[key]}&`;
    }
    filterUrl = filterUrl.slice(0, filterUrl.length - 1);
    console.log(filterUrl);
    api
      .getResource(`/${page}/?${filterUrl}`)
      .then((filteredData) => setData(filteredData))
      .then(() => setFiltersModalVisible(false));
  };

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
                  setFilters={handleSetFilters}
                  filters={filters}
                />
              )
          )}
        </div>
        <button className={styles.submit} onClick={getFilteredData}>
          search
        </button>
      </div>
    </div>
  );
};
