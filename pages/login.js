import Head from "next/head";
import styles from "../styles/Login.module.css";
import Image from "next/image";
import jaklhofSonne from "../public/jaklhof-sonne.png";
import { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import { useRouter } from "next/router";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      setUserData(data.user);
      if (error) throw error;
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
      router.push("/dashboard");
    }
  };

  return (
    <div>
      <Head>
        <title>Login - Jaklhof Logistics</title>
      </Head>
      <h1 className={styles.heading}>Login</h1>
      <form className={styles.loginForm} onSubmit={handleLogin}>
        <label htmlFor="email" className={styles.labelEmail}>
          Email
        </label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
          className={styles.formContent}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <label htmlFor="password" className={styles.labelPassword}>
          Passwort
        </label>
        <br />
        <input
          type="password"
          id="password"
          placeholder="Passwort"
          className={styles.formContent}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <button className="btn" type="submit">
          Log in
        </button>
      </form>
      <div className={styles.logo}>
        <Image src={jaklhofSonne} width={90} height={90} />
      </div>
    </div>
  );
}
