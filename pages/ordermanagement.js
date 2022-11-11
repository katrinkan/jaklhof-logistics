import Head from "next/head";
import Navbar from "../components/Navbar";
import OrderCard from "../components/OrderCard";
import styles from "../styles/Ordermanagement.module.css";
import { useState, useEffect, createContext } from "react";
import { supabase } from "../utils/supabaseClient";

export const OrderContext = createContext();

export default function Ordermanagement() {
  const [fetchError, setFetchError] = useState(null);
  const [orders, setOrders] = useState(null);

  const onDelete = (id) => {
    setOrders((prevOrders) => {
      return prevOrders.filter((orders) => orders.id !== id);
    });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

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
  const value = { onDelete };
  return (
    <OrderContext.Provider value={value}>
      <Head>
        <title>Grossbestellung Management - Jaklhof Logistics</title>
      </Head>
      <Navbar />
      {fetchError && <p>{fetchError}</p>}
      {orders && (
        <div className="container">
          <div className={styles.grid}>
            {orders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        </div>
      )}
    </OrderContext.Provider>
  );
}
