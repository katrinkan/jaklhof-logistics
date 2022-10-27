import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import styles from "./UpdateToDo.module.css";

export default function UpdateToDo(props) {
  const [amount, setAmount] = useState(props.ansaatplan.amount);

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault;
    const { data, error } = await supabase
      .from("ansaatplan")
      .update({ amount: amount })
      .eq("id", props.ansaatplan.id)
      .select();

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
    }
  };
  useEffect(() => {
    const fetchAnsaatplan = async () => {
      const { data, error } = await supabase.from("ansaatplan").select();

      if (error) {
        console.log(error);
      }
      if (data) {
        setAmount(data.amount);
      }
    };
    fetchAnsaatplan();
  }, []);
  return (
    <>
      <form className={styles.form} onChange={handleChange}>
        <label htmlFor="amountPots">Anzahl ändern</label>
        <input
          type="number"
          name="amountPots"
          id="amountPots"
          min="0"
          max="100"
          defaultValue={amount}
          className={styles.input}
        />
      </form>
      <button className="btn" type="submit" onClick={handleSubmit}>
        Ich mach's!
      </button>
    </>
  );
}
