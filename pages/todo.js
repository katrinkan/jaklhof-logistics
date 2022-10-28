import Head from "next/head";
import Collapsible from "../components/Collapsible";
import styles from "../styles/Todo.module.css";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import CollapsibleContent from "../components/CollapsibleContent";

export default function ToDo(props) {
  const [week, setWeek] = useState(props.week);
  const [fetchError, setFetchError] = useState(null);
  const [ansaatplan, setAnsaatplan] = useState(null);

  const handleChange = (event) => {
    setWeek(event.target.value);
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
        <title>To Do - Jaklhof Logistics</title>
      </Head>
      <Navbar />
      <div className="container">
        <div className={styles.container}>
          <h2 className={styles.heading}>Woche {week}</h2>
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
          <div className="ansaatplan">
            {ansaatplan.map((ansaatplan) => (
              <Collapsible
                label={ansaatplan.title}
                category={ansaatplan.category}
                key={ansaatplan.id}
                ansaatplan={ansaatplan}
                week={week}
              >
                <CollapsibleContent ansaatplan={ansaatplan} week={week} />
              </Collapsible>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
