import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Dashboard.module.css";
import { supabase } from "../utils/supabaseClient";

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Dashboard - Jaklhof Logistics</title>
      </Head>
      <h1>Hallo!</h1>
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
      </div>
    </div>
  );
}
