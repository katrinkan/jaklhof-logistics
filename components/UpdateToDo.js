import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import { useUser } from "@supabase/auth-helpers-react";
import styles from "./UpdateToDo.module.css";

export default function UpdateToDo(props) {
  const [amount, setAmount] = useState(props.ansaatplan.amount);
  const [username, setUsername] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [buttonText, setButtonText] = useState(`Ich mach's!`);
  const session = useSession();
  const supabase = useSupabaseClient();

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data, error } = await supabase
      .from("ansaatplan")
      .update({ amount: amount, done_by: username })
      .eq("id", props.ansaatplan.id)
      .select();

    if (error) {
      console.log(error);
    }
    if (data) {
      setDisabled(true);
    }
  };

  const user = useUser();
  useEffect(() => {
    getProfile();
  });

  async function getProfile() {
    try {
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
    }
  }

  useEffect(() => {
    const fetchAnsaatplan = async () => {
      const { data, error } = await supabase.from("ansaatplan").select();

      if (error) {
        console.log(error);
      }
      if (data) {
        setAmount(data.amount);
        if (props.ansaatplan.done_by === null) {
          setDisabled(false);
        }
        if (props.ansaatplan.done_by !== null) {
          setDisabled(true);
          setButtonText(`${props.ansaatplan.done_by} macht's!`);
        }
      }
    };
    fetchAnsaatplan();
  });

  return (
    <>
      <form className={styles.form} onChange={handleChange}>
        <label htmlFor="amountPots">Anzahl ??ndern</label>
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
      <button
        className={styles.btn}
        type="submit"
        onClick={handleSubmit}
        disabled={disabled}
      >
        {buttonText}
      </button>
    </>
  );
}
