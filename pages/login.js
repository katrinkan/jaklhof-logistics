import Head from "next/head";
import styles from "../styles/Login.module.css";
import Image from "next/image";
import jaklhofSonne from "../public/jaklhof-sonne.png";

export default function Login() {
  return (
    <div>
      <Head>
        <title>Login - Jaklhof Logistics</title>
      </Head>

      <h1 className={styles.heading}>Login</h1>
      <form className={styles.loginForm}>
        <label for="email" className={styles.labelEmail}>
          Email
        </label>
        <br />
        <input
          type="email"
          placeholder="Email"
          required
          className={styles.formContent}
        />
        <br />
        <label for="password" className={styles.labelPassword}>
          Password
        </label>
        <br />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.formContent}
        />
        <br />
        <input type="submit" value="Login" className="btn" />
      </form>
      <div className={styles.logo}>
        <Image src={jaklhofSonne} width={90} height={90} />
      </div>
    </div>
  );
}
