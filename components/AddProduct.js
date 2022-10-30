import styles from "./AddProduct.module.css";

export default function AddProduct() {
  return (
    <form>
      <div className={styles.grid}>
        <div className={styles.grid_item}>
          <label className={styles.label} htmlFor="category">
            Kategorie
          </label>
          <input className={styles.input} type="text" id="category" />
        </div>
        <div className={styles.grid_item}>
          <label className={styles.label} htmlFor="titel">
            Titel
          </label>
          <input className={styles.input} type="text" id="title" />
        </div>
        <div className={styles.grid_item}>
          <label className={styles.label} htmlFor="stock">
            Anfangsbestand
          </label>
          <input className={styles.input} type="text" id="stock" />
        </div>
        <div className={styles.grid_item}>
          <div className={styles.input_btn}>
            <input type="submit" id="save" value="Speichern" />
          </div>
        </div>
      </div>
    </form>
  );
}
