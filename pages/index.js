import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Homepage from "./Homepage";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>project</title>
        <meta name="description" content="project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage />
    </div>
  );
}
