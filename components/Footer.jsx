import React from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import styles from "../styles/Footer.module.css";
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        left
        <div className={styles.logo}>logo</div>
        <p className={styles.p}>let you money work for you</p>
        <div class="counter-section">
          <div class="ft_about_icon float_left">
            <i class="flaticon-user"> </i>
            <div className={styles.icons}>
              <h1 class="timer">1000</h1>

              <h4>
                <i>
                  <AiOutlineDollarCircle font-size="50px" margin="auto" />
                </i>
                total member
              </h4>
            </div>
          </div>
          <div class="ft_about_icon float_left">
            <i class="flaticon-money-bag"></i>
            <div class="ft_abt_text_wrapper">
              <p class="timer">20000</p>
              <h4>total deposited</h4>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.center}>
        center
        <ul>
          <p>OTHER LINKS</p>
          <li>Home</li>
          <li>Contact</li>
          <li>Register</li>
          <li>About</li>
        </ul>
      </div>
      <div className={styles.right}>
        right
        <p>CONTACT US</p>
        <h3>Tweeter</h3>
        <h3>Whatsapp</h3>
        <h3>Whatsapp</h3>
        <h3>Whatsapp</h3>
      </div>
    </div>
  );
}

export default Footer;
