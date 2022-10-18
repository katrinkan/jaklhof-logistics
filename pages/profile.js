import Head from "next/head";
import Image from "next/image";
import jaklhofSonne from "../public/jaklhof-sonne.png";
import { supabase } from "../utils/supabaseClient";
import styles from "../styles/Login.module.css";
import { useState, useEffect } from "react";

export default function Profile({ session }) {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  useEffect(() => {
    getProfile();
  }, [session]);

  async function getCurrentUser() {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();

    if (error) {
      throw error;
    }
    if (!session?.user) {
      throw new Error("User not logged in");
    }
    return session.user;
  }

  async function getProfile() {
    try {
      setLoading(true);
      const user = await getCurrentUser();
      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setUsername(data.username);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ username }) {
    try {
      setLoading(true);
      const user = await getCurrentUser();
      const updates = {
        id: user.id,
        username,
        updated_at: new Date(),
      };
      let { error } = await supabase.from("profiles").upsert(updates);
      if (error) {
        throw error;
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
        <title>Profil bearbeiten - Jaklhof Logistics</title>
      </Head>
      <h1 className={styles.heading}>Profil bearbeiten</h1>
      <form className={styles.loginForm}>
        <label htmlFor="username" className={styles.labelEmail}>
          Benutzername
        </label>
        <br />
        <input
          type="text"
          id="username"
          placeholder="Benutzername"
          className={styles.formContent}
          value={username || ""}
          onChange={(event) => {
            setUsername(event.target.value);
            console.log(event.target.value);
          }}
        />
        <br />
      </form>
      <button
        className="btn"
        onClick={() => {
          updateProfile({ username });
        }}
        disabled={loading}
      >
        {loading ? "Loading..." : "Änderung speichern"}
      </button>
      <div className={styles.logo}>
        <Image src={jaklhofSonne} width={90} height={90} />
      </div>
    </div>
  );
}
