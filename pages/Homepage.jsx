import React from "react";
import styles from "../styles/Homepage.module.css";

function Homepage() {
  return (
    <div className={styles.container}>
      <div className={styles.image_section}>
        <h1>big image</h1>
      </div>
      <div className={styles.first_section}>
        <div className={styles.picture_section}>left</div>
        <div className={styles.writeup_section}>right</div>
      </div>
    </div>
  );
}

export default Homepage;
