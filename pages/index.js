import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Dashboard from "./dashboard";

export default function Home() {
  const session = useSession();
  const supabase = useSupabaseClient();
  return (
    <>
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="light"
        />
      ) : (
        <Dashboard session={session} />
      )}
    </>
  );
}
