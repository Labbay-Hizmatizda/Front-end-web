import React, { useState } from "react";
import styles from "./TableRow.module.scss";
import { TextModal } from "../TextModal";

export const TableRowText = ({ text }) => {
  const [textModalState, setTextModalState] = useState(false);
  return (
    <>
      <div
        onClick={() => setTextModalState(!textModalState)}
        className={styles.longText}
      >{`${text.substring(0, 10)}...`}</div>
      {textModalState && (
        <TextModal text={text} setTextModalState={setTextModalState} />
      )}
    </>
  );
};
