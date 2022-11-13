import Head from "next/head";
import Image from "next/image";
import jaklhofSonne from "../public/jaklhof-sonne.png";
import styles from "../styles/Profile.module.css";
import { useState, useEffect, useContext } from "react";
import {
  useUser,
  useSupabaseClient,
  useSession,
} from "@supabase/auth-helpers-react";
import Navbar from "../components/Navbar";
import { ProfileContext } from ".";

export default function Profile() {
  const supabase = useSupabaseClient();
  const [loading, setLoading] = useState(true);
  const [newUsername, setNewUsername] = useState(username);
  const { username, signOut } = useContext(ProfileContext);

  async function updateProfile() {
    try {
      setLoading(true);

      const updates = {
        id: user.id,
        username: newUsername,
        updated_at: new Date().toISOString(),
      };
      let { error } = await supabase.from("profiles").upsert(updates);
      if (error) throw error;
      alert("Profile updated!");
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
            setNewUsername(event.target.value);
          }}
        />
        <br />
        <button
          className="btn"
          onClick={() => {
            updateProfile(username);
            setNewUsername("");
          }}
          disabled={loading}
        >
          {loading ? "Loading..." : "Änderung speichern"}
        </button>
        <button className="btn" onClick={signOut}>
          Log Out
        </button>
      </form>

      <div className={styles.logo}>
        <Image src={jaklhofSonne} width={90} height={90} alt="Jaklhof logo" />
      </div>
    </div>
  );
}
