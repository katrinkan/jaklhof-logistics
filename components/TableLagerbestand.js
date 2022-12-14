import { useContext, useState } from "react";
import { LagerbestandContext } from "../pages/lagerbestand";
import styles from "../styles/Lagerbestand.module.css";
import { supabase } from "../utils/supabaseClient";

export default function TableLagerbestand({ lagerbestand }) {
  const { onDelete, setLagerbestand } = useContext(LagerbestandContext);
  const [stock, setStock] = useState(Number(lagerbestand.stock));
  const initialStock = Number(stock);

  const handleAddition = (event) => {
    event.preventDefault();
    let additionalValue = Number(event.target.value);
    let newStock = initialStock + additionalValue;
    setStock(newStock);
  };

  const handleSubtraction = (event) => {
    event.preventDefault();
    let subtractedValue = Number(event.target.value);
    let newStock = initialStock - subtractedValue;
    setStock(newStock);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data, error } = await supabase
      .from("lagerbestand")
      .update({ stock: stock })
      .eq("id", lagerbestand.id)
      .select();

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      setLagerbestand(data);
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    const { data, error } = await supabase
      .from("lagerbestand")
      .delete()
      .eq("id", lagerbestand.id)
      .select();

    if (error) {
      console.log(error);
    }
    if (data) {
      onDelete(lagerbestand.id);
    }
  };

  return (
    <>
      <div className={styles.grid_item}>
        <label className={styles.label}>To Do</label>
        <input
          className={styles.input}
          type="text"
          id="action"
          disabled={true}
          defaultValue={lagerbestand.stock <= 1 ? "Bestellen" : ""}
        />
      </div>
      <div className={styles.grid_item}>
        <label className={styles.label}>Titel</label>
        <input
          className={styles.input}
          type="text"
          id="title"
          disabled={true}
          defaultValue={lagerbestand.title}
        />
      </div>
      <div className={styles.grid_item}>
        <label className={styles.label}>Aktuell verf??gbar</label>
        <input
          className={styles.input}
          type="number"
          id="stock"
          disabled={true}
          defaultValue={lagerbestand.stock}
        />
      </div>
      <div className={styles.grid_item}>
        <label className={styles.label}>Hinzuf??gen</label>
        <input
          className={styles.input}
          type="number"
          id="add"
          onChange={handleAddition}
        />
      </div>
      <div className={styles.grid_item}>
        <label className={styles.label}>Entnehmen</label>
        <input
          className={styles.input}
          type="number"
          id="remove"
          onChange={handleSubtraction}
        />
      </div>
      <div className={styles.grid_item}>
        <div className={styles.input_btn}>
          <input
            type="submit"
            id="save"
            value="Speichern"
            onClick={handleSubmit}
          />
          <input
            type="submit"
            id="delete"
            value="L??schen"
            onClick={handleDelete}
          />
        </div>
      </div>
    </>
  );
}
