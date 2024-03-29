import React from "react";
import styles from "./TextModal.module.scss";

export const TextModal = ({ text, setTextModalState }) => {
  return (
    <div className={styles.wrapper} onClick={() => setTextModalState(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};
