import { useEffect, useState, createContext } from "react";
import Head from "next/head";
import ChangeCategory from "../components/ChangeCategory";
import Navbar from "../components/Navbar";
import { supabase } from "../utils/supabaseClient";

export const LagerbestandContext = createContext();

export default function Lagerbestand() {
  const [fetchError, setFetchError] = useState(null);
  const [lagerbestand, setLagerbestand] = useState(null);

  const onDelete = (id) => {
    setLagerbestand((prevLagerbestand) => {
      return prevLagerbestand.filter((lagerbestand) => lagerbestand.id !== id);
    });
  };

  useEffect(() => {
    fetchLagerbestand();
  }, []);
  const fetchLagerbestand = async () => {
    const { data, error } = await supabase
      .from("lagerbestand")
      .select()
      .order("title", { ascending: true });

    if (error) {
      setFetchError("Could not fetch Lagerbestand");
      setLagerbestand(null);
      console.log(error);
    }
    if (data) {
      setLagerbestand(data);
      setFetchError(null);
    }
  };

  const value = { lagerbestand, setLagerbestand, fetchError, onDelete };
  return (
    <LagerbestandContext.Provider value={value}>
      <Head>
        <title>Lagerbestand - Jaklhof Logistics</title>
      </Head>
      <Navbar />
      <div className="container">
        <ChangeCategory />
      </div>
    </LagerbestandContext.Provider>
  );
}
