import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Dashboard.module.css";
import { supabase } from "../utils/supabaseClient";

export default function Dashboard() {
  const [greeting, setGreeting] = useState("");

  const handleResponse = (response) => {
    console.log(response.data.user.email);
    setGreeting(response.data.user.email);
  };

  const getUser = () => {
    supabase.auth.getUser().then(handleResponse);
  };

  getUser();

  return (
    <div className>
      <Head>
        <title>Dashboard - Jaklhof Logistics</title>
      </Head>
      <h1>Hallo, {greeting}!</h1>
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
