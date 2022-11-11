import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import styles from "../styles/Dashboard.module.css";
import { useEffect, useState } from "react";
import { useSession, useUser } from "@supabase/auth-helpers-react";
import { supabase } from "../utils/supabaseClient";

export default function Dashboard(props) {
  const [username, setUsername] = useState(null);
  const session = useSession();
  const user = useUser();
  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      let { data, error, status } = await supabase
        .from("profiles")
        .select("username")
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setUsername(data.username);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  console.log(props.session);
  return (
    <div>
      <Head>
        <title>Dashboard - Jaklhof Logistics</title>
      </Head>
      <Navbar />
      <div className="container">
        <h1>Hallo {username}!</h1>
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
