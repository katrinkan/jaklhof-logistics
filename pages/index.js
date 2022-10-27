import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import jaklhofSonne from "../public/jaklhof-sonne.png";
import { supabase } from "../utils/supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import Dashboard from "./dashboard";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const session = useSession();
  const supabase = useSupabaseClient();
  const customTheme = {
    default: {
      colors: {
        brand: "#5c9335",
        brandAccent: "#white",
        defaultButtonBackground: "#5c9335",
        brandButtonText: "black",
      },
      fonts: {
        bodyFontFamily: "Roboto, sans-serif;",
      },
      radii: {
        borderRadiusButton: "4px",
        buttonBorderRadius: "4px",
        inputBorderRadius: "4px",
      },
      fontSizes: {
        baseBodySize: "13px",
        baseInputSize: "16px",
        baseLabelSize: "20px",
        baseButtonSize: "20px",
      },
      space: {
        emailInputSpacing: "4px",
        buttonPadding: "8px 15px",
        inputPadding: "8px 15px",
      },
    },
  };

  const user = useUser();
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
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Willkommen - Jaklhof Logistics</title>
      </Head>
      {!session ? (
        <div className="container_login">
          <Auth
            supabaseClient={supabase}
            theme="default"
            appearance={{ theme: customTheme }}
            localization={{
              variables: {
                sign_in: {
                  email_label: "Deine Email Adresse",
                  password_label: "Dein Passwort",
                  button_label: "Log in",
                },
                sign_up: {
                  link_text: "",
                },
              },
            }}
          />
          <div className="logo">
            <Image src={jaklhofSonne} width={90} height={90} />
          </div>
        </div>
      ) : (
        <Dashboard username={username} />
      )}
    </>
  );
}
