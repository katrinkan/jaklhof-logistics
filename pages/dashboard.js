import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Dashboard.module.css";

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Dashboard - Jaklhof Logistics</title>
      </Head>
      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <Link href="/todo">
            <h2>Ansaatplan</h2>
          </Link>
        </div>
        <div className={styles.gridItem}>
          <Link href="/users">
            <h2>Manage Users</h2>
          </Link>
        </div>
        <div className={styles.gridItem}>
          <h2>Lagerbestand</h2>
        </div>
        <div className={styles.gridItem}>
          <Link href="/ansaatplan">
            <h2>Manage Ansaatplan</h2>
          </Link>
        </div>
        <div className={styles.gridItem}>
          <h2>Großbestellung</h2>
        </div>
      </div>
    </div>
  );
}
