import React from "react";
import cover from "../../../img/cover4.jpg";
import styles from "../../../css/Cover.module.css";
const Cover = () => {
  return (
    <section>
      <img className={styles.cover_style} src={cover} alt="coverImg" />
    </section>
  );
};

export default Cover;
