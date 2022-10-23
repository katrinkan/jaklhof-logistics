import Head from "next/head";
import styles from "../styles/Login.module.css";
import Image from "next/image";
import jaklhofSonne from "../public/jaklhof-sonne.png";
import { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    let { user, error } = await supabase.auth.signInWithPassword(
      {
        email: email,
        password: password,
      },
      router.push("/dashboard")
    );
    error ? console.log(error) : console.log(user);
  };

  return (
    <div>
      <Head>
        <title>Login - Jaklhof Logistics</title>
      </Head>
      <h1 className={styles.heading}>Login</h1>
      <form className={styles.loginForm}>
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
        <button
          className="btn"
          onClick={(event) => {
            event.preventDefault();
            handleLogin(email);
          }}
        >
          Log in
        </button>
      </form>
      <div className={styles.logo}>
        <Image src={jaklhofSonne} width={90} height={90} />
      </div>
    </div>
  );
}
