// import React, { useState, useEffect } from "react";
// import styles from "../styles/Navbar.module.css";
// const Navbar = () => {
//   // const [toggleMenu, setToggleMenu] = useState(false);
//   // const toggleNav = () => {
//   //   setToggleMenu(!toggleMenu);
//   // };

//   // useEffect(() => {
//   //   const changeWidth = () => {
//   //     setScreenWidth(window.innerWidth);
//   //   };

//   //   window.addEventListener("resize", changeWidth);

//   //   return () => {
//   //     window.removeEventListener("resize", changeWidth);
//   //   };
//   // }, []);
//   return (
//     <div className={styles.navbar}>
//       <div className={styles.logo}>
//         <h1>Logo</h1>
//       </div>
//       {/* {(toggleMenu || screenWidth > 500) && (  )} */}

//       <ul className={styles.lists}>
//         <li className={styles.items}>Home</li>
//         <li className={styles.items}>About us</li>
//         <li className={styles.items}>Affiliate program</li>
//         <li className={styles.items}>faq</li>
//         <li className={styles.items}>Contents</li>
//         <li className={styles.items}>Login</li>

//         <li className={styles.items}>Register</li>
//       </ul>

//       {/*
//       <button onClick={toggleNav} className={styles.btn}>
//         btn
//       </button> */}
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
// import { useSelector } from "react-redux";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.logo}>
          <h1>LOGO</h1>
          {/* <Image src="/img/telephone.png" alt="" width="32" height="32" /> */}
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>Home</li>
          </Link>
          <Link href="/about" passHref>
            <li className={styles.listItem}>about us</li>
          </Link>
          <Link href="/program" passHref>
            <li className={styles.listItem}>Afiliate program</li>
          </Link>
          <Link href="/faq" passHref>
            <li className={styles.listItem}>faq</li>
          </Link>
          <Link href="/content" passHref>
            <li className={styles.listItem}>content</li>
          </Link>
          <Link href="/login" passHref>
            <li className={styles.listItem}>Login</li>
          </Link>
          <Link href="/register" passHref>
            <li className={styles.listItem}>register</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
