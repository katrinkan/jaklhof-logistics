import Week from "../components/Week";
import Head from "next/head";
import Collapsible from "../components/Collapsible";
import styles from "../styles/Todo.module.css";
import Navbar from "../components/Navbar";

export default function ToDo() {
  return (
    <>
      <Head>
        <title>To Do - Jaklhof Logistics</title>
      </Head>
      <Navbar />
      <div className="container">
        <Week />

        <Collapsible label="Batavia rot">
          <div className={styles.grid}>
            <div className={styles.gridItem}>
              <h6>Anzahl</h6>
              <h5 className={styles.description}>6</h5>
            </div>
            <div className={styles.gridItem}>
              <h6>Einheit</h6>
              <h5 className={styles.description}>#</h5>
            </div>
            <div className={styles.gridItem}>
              <h6>Sorte</h6>
              <h5 className={styles.description}>Redial, Mineral</h5>
            </div>
            <div className={styles.gridItem}>
              <h6>Platten-Typ</h6>
              <h5 className={styles.description}>77</h5>
            </div>
            <div className={styles.gridItem}>
              <h6>Substrat</h6>
              <h5 className={styles.description}>Potground, Anzuchterde</h5>
            </div>
            <div className={styles.gridItem}>
              <h6>Verwendung</h6>
              <h5 className={styles.description}>Folientunnel</h5>
            </div>
          </div>
          <form className={styles.form}>
            <label htmlFor="amountPots">Anzahl ändern</label>
            <input
              type="number"
              name="amountPots"
              id="amountPots"
              min="0"
              max="100"
              defaultValue="6"
              className={styles.input}
            />
          </form>
          <button className="btn">Ich mach's!</button>
        </Collapsible>
        <Collapsible label="Batavia grün">
          <div className={styles.grid}>
            <div className={styles.gridItem}>
              <h6>Anzahl</h6>
              <h5 className={styles.description}>6</h5>
            </div>
            <div className={styles.gridItem}>
              <h6>Einheit</h6>
              <h5 className={styles.description}>#</h5>
            </div>
            <div className={styles.gridItem}>
              <h6>Sorte</h6>
              <h5 className={styles.description}>Aveleda</h5>
            </div>
            <div className={styles.gridItem}>
              <h6>Platten-Typ</h6>
              <h5 className={styles.description}>77</h5>
            </div>
            <div className={styles.gridItem}>
              <h6>Substrat</h6>
              <h5 className={styles.description}>Potground, Anzuchterde</h5>
            </div>
            <div className={styles.gridItem}>
              <h6>Verwendung</h6>
              <h5 className={styles.description}>Folientunnel</h5>
            </div>
          </div>
          <form className={styles.form}>
            <label htmlFor="amountPotsTwo">Anzahl ändern</label>
            <input
              type="number"
              name="amountPotsTwo"
              id="amountPots"
              min="0"
              max="100"
              defaultValue="6"
              className={styles.input}
            />
          </form>
          <button className="btn">Ich mach's!</button>
        </Collapsible>
      </div>
    </>
  );
}
