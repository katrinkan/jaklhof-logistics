import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Grossbestellung.module.css";
import { supabase } from "../utils/supabaseClient";

export default function Grossbestellung() {
  const [name, setName] = useState("");
  const [order, setOrder] = useState("");
  const [pickup_date, setPickup_date] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !order) {
      setFormError("Bitte vollständig ausfüllen!");
      return;
    }
    const { data, error } = await supabase
      .from("orders")
      .insert([{ name, order, pickup_date }])
      .select();

    if (error) {
      setFormError("Bitte vollständig ausfüllen!");
      console.log(error);
    }
    if (data) {
      setFormError(null);

      setName("");
      setOrder("");
      setPickup_date("");
    }
  };

  return (
    <>
      <Head>
        <title>Großbestellung - Jaklhof Logistics</title>
      </Head>
      <Navbar />
      <div className="container">
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className={styles.input}
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <label htmlFor="order">Bestellung</label>
            <textarea
              id="order"
              rows="5"
              cols="33"
              className={styles.input}
              value={order}
              onChange={(event) => setOrder(event.target.value)}
            />
            <label htmlFor="pickup_date">Abholdatum</label>
            <input
              type="date"
              id="pickup_date"
              className={styles.input}
              value={pickup_date}
              onChange={(event) => setPickup_date(event.target.value)}
            />

            <input type="submit" value="Senden" className="btn" />
          </form>
        </div>
      </div>
    </>
  );
}
