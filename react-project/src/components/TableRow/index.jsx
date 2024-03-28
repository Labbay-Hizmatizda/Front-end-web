import React, { useState } from "react";
import styles from "./TableRow.module.scss";
import eyeIcon from "../../assets/images/eye-regular.svg";
import { ImageModal } from "../ImageModal";

export const TableRow = ({ data }) => {
  const [imageModalState, setImageModalState] = useState(false);
  return (
    <div className={styles.wrapper}>
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className={styles.column}>
          {key !== "image" ? (
            value
          ) : (
            <button
              className={styles.openModalBtn}
              onClick={() => setImageModalState(!imageModalState)}
            >
              <img src={eyeIcon} alt="icon" />
              {imageModalState && (
                <ImageModal
                  img={value}
                  setImageModalState={setImageModalState}
                />
              )}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};
