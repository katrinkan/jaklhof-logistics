import Head from "next/head";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import TableAnsaatplan from "../components/TableAnsaatplan";
import { supabase } from "../utils/supabaseClient";
import styles from "../styles/Ansaatplan.module.css";

export default function Ansaatplan(props) {
  const [weekSelect, setWeekSelect] = useState(props.week);
  const [fetchError, setFetchError] = useState(null);
  const [ansaatplan, setAnsaatplan] = useState(null);

  const handleChange = (event) => {
    setWeekSelect(event.target.value);
  };
  useEffect(() => {
    const fetchAnsaatplan = async () => {
      const { data, error } = await supabase.from("ansaatplan").select();

      if (error) {
        setFetchError("Could not fetch Ansaatplan");
        setAnsaatplan(null);
        console.log(error);
      }
      if (data) {
        setAnsaatplan(data);
        setFetchError(null);
      }
    };
    fetchAnsaatplan();
  }, []);

  return (
    <>
      <Head>
        <title>Ansaatplan - Jaklhof Logistics</title>
      </Head>
      <Navbar />
      <div className="container">
        <div className={styles.container}>
          <h2 className={styles.heading}>Woche {weekSelect}</h2>
          <form className={styles.form}>
            <label htmlFor="week" className={styles.label}>
              Woche ändern
            </label>
            <input
              type="number"
              name="week"
              id="week"
              min="1"
              max="52"
              onChange={handleChange}
              defaultValue={props.week}
              className={styles.input}
            />
          </form>
        </div>
        {fetchError && <p>{fetchError}</p>}
        {ansaatplan && (
          <>
            <TableAnsaatplan
              key={ansaatplan.id}
              ansaatplan={ansaatplan}
              week={weekSelect}
            ></TableAnsaatplan>
          </>
        )}
      </div>
    </>
  );
}
