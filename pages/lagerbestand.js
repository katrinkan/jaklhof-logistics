import Head from "next/head";
import AddProduct from "../components/AddProduct";
import Navbar from "../components/Navbar";
import styles from "../styles/Lagerbestand.module.css";

export default function Lagerbestand() {
  return (
    <>
      <Head>
        <title>Lagerbestand - Jaklhof Logistics</title>
      </Head>
      <Navbar />
      <div className="container">
        <button className={styles.btn}>Getreide</button>
        <button className={styles.btn}>Nudeln</button>
        <button className={styles.btn}>Öl</button>

        <form className={styles.form}>
          <div className={styles.grid}>
            <div className={styles.grid_item}>
              <label className={styles.label} htmlFor="action">
                To Do
              </label>
              <input
                className={styles.input}
                type="text"
                id="action"
                disabled="true"
              />
            </div>
            <div className={styles.grid_item}>
              <label className={styles.label} htmlFor="title">
                Titel
              </label>
              <input
                className={styles.input}
                type="text"
                id="title"
                disabled="true"
              />
            </div>
            <div className={styles.grid_item}>
              <label className={styles.label} htmlFor="stock">
                Aktuell verfügbar
              </label>
              <input
                className={styles.input}
                type="number"
                id="stock"
                disabled="true"
              />
            </div>
            <div className={styles.grid_item}>
              <label className={styles.label} htmlFor="add">
                Hinzufügen
              </label>
              <input className={styles.input} type="text" id="add" />
            </div>
            <div className={styles.grid_item}>
              <label className={styles.label} htmlFor="remove">
                Entnehmen
              </label>
              <input className={styles.input} type="text" id="remove" />
            </div>

            <div className={styles.grid_item}>
              <div className={styles.input_btn}>
                <input type="submit" id="save" value="Speichern" />
                <input type="submit" id="delete" value="Löschen" />
              </div>
            </div>
          </div>
        </form>
        <AddProduct />
      </div>
    </>
  );
}
