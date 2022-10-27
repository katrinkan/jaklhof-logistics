import Week from "../components/Week";
import Head from "next/head";
import Collapsible from "../components/Collapsible";
import styles from "../styles/Todo.module.css";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import CollapsibleContent from "../components/CollapsibleContent";

export default function ToDo() {
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 1);
  const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil(days / 7);

  const [fetchError, setFetchError] = useState(null);
  const [ansaatplan, setAnsaatplan] = useState(null);

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
        <Week weekNumber={weekNumber} />
        {fetchError && <p>{fetchError}</p>}
        {ansaatplan && (
          <div className="ansaatplan">
            {ansaatplan.map((ansaatplan) => (
              <Collapsible
                label={ansaatplan.title}
                category={ansaatplan.category}
                key={ansaatplan.id}
                ansaatplan={ansaatplan}
                week={weekNumber}
              >
                <CollapsibleContent ansaatplan={ansaatplan} week={weekNumber} />
              </Collapsible>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
