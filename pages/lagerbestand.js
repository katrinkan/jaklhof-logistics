import Head from "next/head";
import { useState } from "react";

import AddProduct from "../components/AddProduct";
import Navbar from "../components/Navbar";
import TableLagerbestand from "../components/TableLagerbestand";
import useFetchLagerbestand from "../helpers/useFetchLagerbestand";
import styles from "../styles/Lagerbestand.module.css";
import { supabase } from "../utils/supabaseClient";

export default function Lagerbestand() {
  const { lagerbestand, fetchError } = useFetchLagerbestand();
  const [category, setCategory] = useState(null);

  const handleCategoryChange = async (event) => {
    event.preventDefault();
    const { data, error } = await supabase
      .from("lagerbestand")
      .select()
      .filter("category", "eq", event.target.value);
    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      setCategory(data);
    }
  };

  return (
    <>
      <Head>
        <title>Lagerbestand - Jaklhof Logistics</title>
      </Head>
      <Navbar />
      <div className="container">
        <button
          className={styles.btn}
          value="Getreide"
          onClick={handleCategoryChange}
        >
          Getreide
        </button>
        <button
          className={styles.btn}
          value="Nudeln"
          onClick={handleCategoryChange}
        >
          Nudeln
        </button>
        <button
          className={styles.btn}
          value="Öl"
          onClick={handleCategoryChange}
        >
          Öl
        </button>
        <button className={styles.btn}>Neues Produkt</button>
        {fetchError && <p>{fetchError}</p>}
        {category && (
          <div className="container">
            {category.map((category) => (
              <TableLagerbestand key={category.id} lagerbestand={category} />
            ))}
          </div>
        )}
        <AddProduct />
      </div>
    </>
  );
}
