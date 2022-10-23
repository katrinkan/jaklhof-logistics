import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Dashboard.module.css";
import { supabase } from "../utils/supabaseClient";
import { useUser } from "@supabase/auth-helpers-react";

export default function Dashboard(props) {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const user = useUser();
  useEffect(() => {
    getProfile();
  }, [props.session]);

  async function getProfile() {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        console.log(data.username);
        setUsername(data.username);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

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
        </div>
      </div>
    </div>
  );
}
