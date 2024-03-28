import React from "react";
import styles from "./ImageModal.module.scss";

export const ImageModal = ({ img, setImageModalState }) => {
  return (
    <div className={styles.wrapper} onClick={() => setImageModalState(false)}>
      <div className={styles.modal}>
        <img src={img} alt="modal-image" className={styles.img} />
      </div>
    </div>
  );
};
