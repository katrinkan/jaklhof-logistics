import { useSession, useUser } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import styles from "./OrderCard.module.css";

export default function OrderCard({ order }) {
  const [username, setUsername] = useState(null);
  const session = useSession();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data, error } = await supabase
      .from("orders")
      .update({ done: username })
      .eq("id", order.id)
      .select();

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
    }
  };
  const user = useUser();
  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      let { data, error, status } = await supabase
        .from("profiles")
        .select("username")
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setUsername(data.username);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className={styles.order_card}>
      <h3>{order.name}</h3>
      <p>{order.order}</p>
      <h4>{order.pickup_date}</h4>
      <button className="btn" onClick={handleSubmit}>
        Bestellt
      </button>
    </div>
  );
}
