import React from "react";
import styles from "../styles/Register.module.css";
import Image from "next/image";
function register() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1>left</h1>
          {/* <Image src="/img/pics.webp" width={700} height={500} /> */}
        </div>
        <div className={styles.right}>
          <div className={styles.form}>
            <form action="">
              <div className={styles.heading}>
                <h1>Register</h1>
              </div>
              <input
                type="text"
                placeholder="Firstname"
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Lastname"
                className={styles.input}
              />
              <input type="text" placeholder="Email" className={styles.input} />
              <input type="text" placeholder="Phone" className={styles.input} />
              <input
                type="text"
                placeholder="Password"
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Confirm Password"
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Qestion"
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Answer"
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Username"
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Country"
                className={styles.input}
              />
              <input type="text" placeholder="City" className={styles.input} />
              <input
                type="text"
                placeholder="Adress"
                className={styles.input}
              />
              <div className={styles.checkbox}>
                <label>
                  {" "}
                  <a href="/terms">I agreed to the Terms and Conditions.</a>
                  <input
                    type="checkbox"
                    className={styles.input}
                    name="terms"
                    id="terms"
                  />
                  <span></span>
                </label>
              </div>
              <div className={styles.btn}>
                <button type="submit" className={styles.button}>
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default register;
