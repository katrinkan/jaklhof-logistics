import Head from "next/head";
import Image from "next/image";
import jaklhofSonne from "../public/jaklhof-sonne.png";
import styles from "../styles/Profile.module.css";
import { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { supabase } from "../utils/supabaseClient";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";

export default function Profile({ session }) {
  const router = useRouter();
  const supabase = useSupabaseClient();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    getProfile();
  }, [session]);

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
        setUsername(data.username);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ username }) {
    try {
      setLoading(true);

      const updates = {
        id: user.id,
        username,
        updated_at: new Date().toISOString(),
      };
      let { error } = await supabase.from("profiles").upsert(updates);
      if (error) {
        throw error;
        alert("Profile updated!");
      }
    } catch (error) {
      alert("Error updating the data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Head>
        <title>Profil bearbeiten - Jaklhof Logistics</title>
      </Head>
      <Navbar />
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
          }}
        />
        <br />
        <button
          className="btn"
          onClick={() => {
            updateProfile({ username });
            setUsername("");
          }}
          disabled={loading}
        >
          {loading ? "Loading..." : "Änderung speichern"}
        </button>
        <button
          className="btn"
          onClick={() => {
            supabase.auth.signOut();
            router.push("/");
          }}
        >
          Log Out
        </button>
      </form>

      <div className={styles.logo}>
        <Image src={jaklhofSonne} width={90} height={90} />
      </div>
    </div>
  );
}
