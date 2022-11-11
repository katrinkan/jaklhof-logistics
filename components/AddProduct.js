import { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import styles from "./AddProduct.module.css";

export default function AddProduct() {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [stock, setStock] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!category || !title || !stock) {
      setFormError('Bitte vollständig ausfüllen"!');
      return;
    }
    const { data, error } = await supabase
      .from("lagerbestand")
      .insert([{ category, title, stock }])
      .select();

    if (error) {
      console.log(error);
      setFormError("Bitte vollständig ausfüllen");
    }
    if (data) {
      setFormError(null);
      setCategory("");
      setTitle("");
      setStock("");
    }
  };

  return (
    <form>
      <div className={styles.grid}>
        <div className={styles.grid_item}>
          <label className={styles.label} htmlFor="category">
            Kategorie
          </label>
          <input
            className={styles.input}
            type="text"
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </div>
        <div className={styles.grid_item}>
          <label className={styles.label} htmlFor="titel">
            Titel
          </label>
          <input
            className={styles.input}
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className={styles.grid_item}>
          <label className={styles.label} htmlFor="stock">
            Anfangsbestand
          </label>
          <input
            className={styles.input}
            type="text"
            id="stock"
            value={stock}
            onChange={(event) => setStock(event.target.value)}
          />
        </div>
        <div className={styles.grid_item}>
          <span className={styles.input_btn}>
            <input
              type="submit"
              id="save"
              value="Speichern"
              className={styles.input_btn}
              onClick={handleSubmit}
            />
          </span>
        </div>
      </div>
    </form>
  );
}
