import Head from "next/head";
import Image from "next/image";
import jaklhofSonne from "../public/jaklhof-sonne.png";
import { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import { useRouter } from "next/router";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const signUp = async () => {
    let { user, error } = await supabase.auth.signUp(
      {
        email: email,
        password: password,
      },
      alert("Bitte bestätige die von uns erhaltene Email"),
      router.push("/login")
    );
    error ? console.log(error) : console.log(user);
  };

  return (
    <div>
      <Head>
        <title>SignUp - Jaklhof Logistics</title>
      </Head>
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          name="password"
          placeholder="Wähle ein Passwort"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </form>
      <button className="btn" onClick={signUp}>
        Sign Up
      </button>
      <div>
        <Image src={jaklhofSonne} width={90} height={90} alt="Jaklhof logo" />
      </div>
    </div>
  );
}
