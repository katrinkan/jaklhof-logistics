import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import styles from "../styles/Dashboard.module.css";

export default function Dashboard(props) {
  return (
    <div>
      <Head>
        <title>Dashboard - Jaklhof Logistics</title>
      </Head>
      <Navbar />
      <div className="container">
        <h1>Hallo {props.username}!</h1>
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <Link href="/todo">
              <h2>To Do</h2>
            </Link>
          </div>
          <div className={styles.gridItem}>
            <Link href="/users">
              <h2>Manage Users</h2>
            </Link>
          </div>
          <div className={styles.gridItem}>
            <Link href="/lagerbestand">
              <h2>Lagerbestand</h2>
            </Link>
          </div>
          <div className={styles.gridItem}>
            <Link href="/ansaatplan">
              <h2>Manage Ansaatplan</h2>
            </Link>
          </div>
          <div className={styles.gridItem}>
            <Link href="/grossbestellung">
              <h2>Großbestellung</h2>
            </Link>
          </div>
          <div className={styles.gridItem}>
            <Link href="/ordermanagement">
              <h2>Manage Großbestellung</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
