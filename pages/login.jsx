import React from "react";
import styles from "../styles/Login.module.css";
const Login = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.left}>hello</div>
        <div className={styles.right}>
          <div className={styles.form}>
            <form action="">
              <div className={styles.heading}>
                <h1>Login</h1>
              </div>
              <input
                type="email"
                placeholder="Email"
                className={styles.input}
              />
              <input
                type="password"
                placeholder="Password"
                className={styles.input}
              />

              <div className={styles.checkbox}>
                <label>
                  {" "}
                  <a href="/Forget">Forget Password</a>
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
};

export default Login;
