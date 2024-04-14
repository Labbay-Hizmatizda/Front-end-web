import React, { useState } from "react";
import styles from "./FiltersModal.module.scss";
import icon from "../../assets/images/angle-down-solid.svg";

export const FiltersAccordion = ({ list, setFilters }) => {
  const [accordionVisible, setAccordionVisible] = useState(false);
  const [accordionItem, setAccordionItem] = useState();
  const handleItemClick = (item) => {
    setAccordionItem(item.name);
    setAccordionVisible(false);
    setFilters((prevFilters) => ({
      ...prevFilters,
      ["category"]: item.name,
    }));
  };

  return (
    <>
      <div
        className={styles.accordion}
        onClick={() => setAccordionVisible(true)}
      >
        {accordionItem ? (
          <span>{accordionItem}</span>
        ) : (
          <>
            <span>category</span>
            <span>
              <img src={icon} alt="icon" className={styles.accordionIcon} />
            </span>
          </>
        )}
      </div>
      {accordionVisible && (
        <div className={styles.accordionList}>
          {list?.map((item) => (
            <div
              onClick={() => handleItemClick(item)}
              className={styles.accordionListItem}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
