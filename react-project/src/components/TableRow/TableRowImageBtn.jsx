import React, { useState } from "react";
import styles from "./TableRow.module.scss";
import eyeIcon from "../../assets/images/eye-regular.svg";
import { ImageModal } from "../ImageModal";

export const TableRowImageBtn = ({ img }) => {
  const [imageModalState, setImageModalState] = useState(false);
  return (
    <button
      className={styles.openModalBtn}
      onClick={() => setImageModalState(!imageModalState)}
    >
      <img src={eyeIcon} alt="icon" />
      {imageModalState && (
        <ImageModal img={img} setImageModalState={setImageModalState} />
      )}
    </button>
  );
};
