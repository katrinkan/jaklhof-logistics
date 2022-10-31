import Head from "next/head";
import Navbar from "../components/Navbar";
import OrderCard from "../components/OrderCard";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import styles from "../styles/Ordermanagement.module.css";

export default function Ordermanagement() {
  const [fetchError, setFetchError] = useState(null);
  const [orders, setOrders] = useState(null);

  const handleDelete = (id) => {
    setOrders((prevOrders) => {
      return prevOrders.filter((orders) => orders.id !== id);
    });
  };

  useEffect(() => {
    const fetchOrders = async () => {
      const { data, error } = await supabase
        .from("orders")
        .select()
        .order("created_at", { ascending: false });

      if (error) {
        setFetchError("Could not fetch orders");
        setOrders(null);
        console.log(error);
      }
      if (data) {
        setOrders(data);
        setFetchError(null);
      }
    };
    fetchOrders();
  }, []);

  return (
    <>
      <Head>
        <title>Grossbestellung Management - Jaklhof Logistics</title>
      </Head>
      <Navbar />
      {fetchError && <p>{fetchError}</p>}
      {orders && (
        <div className="container">
          <div className={styles.grid}>
            {orders.map((order) => (
              <OrderCard key={order.id} order={order} onDelete={handleDelete} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
