import React from "react";
import styles from "./ImageModal.module.scss";

export const ImageModal = ({ img, setImageModalState }) => {
  console.log(img);
  return (
    <div className={styles.wrapper} onClick={() => setImageModalState(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <img src={img} alt="modal-image" className={styles.img} />
      </div>
    </div>
  );
};
