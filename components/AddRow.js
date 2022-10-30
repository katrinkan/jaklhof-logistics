import { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import styles from "./TableContent.module.css";

export default function AddRow() {
  const [week, setWeek] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [unit, setUnit] = useState("");
  const [variety, setVariety] = useState("");
  const [tray_type, setTray_type] = useState("");
  const [soil_type, setSoil_type] = useState("");
  const [use, setUse] = useState("");
  const [category, setCategory] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !week ||
      !title ||
      !amount ||
      !unit ||
      !variety ||
      !tray_type ||
      !soil_type ||
      !use ||
      !category
    ) {
      setFormError("Bitte vollständig ausfüllen!");
      return;
    }

    const { data, error } = await supabase
      .from("ansaatplan")
      .insert([
        {
          week,
          title,
          amount,
          unit,
          variety,
          tray_type,
          soil_type,
          use,
          category,
        },
      ])
      .select();

    if (error) {
      console.log(error);
      setFormError("Bitte vollständig ausfüllen!");
    }
    if (data) {
      setFormError(null);
    }
  };

  return (
    <form className={styles.add_row} onSubmit={handleSubmit}>
      <div className={styles.grid}>
        <div className={styles.grid_item}>
          <label className={styles.label} htmlFor="week">
            Woche
          </label>
          <input
            className={styles.input}
            type="number"
            id="week"
            min="1"
            max="53"
            value={week}
            onChange={(event) => setWeek(event.target.value)}
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
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className={styles.grid_item}>
          <label className={styles.label} htmlFor="amount">
            Anzahl
          </label>
          <input
            className={styles.input}
            type="number"
            id="amount"
            min="1"
            max="100"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <div className={styles.grid_item}>
          <label className={styles.label} htmlFor="unit">
            Einheit
          </label>
          <input
            className={styles.input}
            type="text"
            id="unit"
            value={unit}
            onChange={(event) => setUnit(event.target.value)}
          />
        </div>
        <div className={styles.grid_item}>
          <label className={styles.label} htmlFor="variety">
            Sorte
          </label>
          <input
            className={styles.input}
            type="text"
            id="variety"
            value={variety}
            onChange={(event) => setVariety(event.target.value)}
          />
        </div>
        <div className={styles.grid_item}>
          <label className={styles.label} htmlFor="tray_type">
            Plattentyp
          </label>
          <input
            className={styles.input}
            type="text"
            id="tray_type"
            value={tray_type}
            onChange={(event) => setTray_type(event.target.value)}
          />
        </div>
        <div className={styles.grid_item}>
          <label className={styles.label} htmlFor="soil">
            Substrat
          </label>
          <input
            className={styles.input}
            type="text"
            id="soil"
            value={soil_type}
            onChange={(event) => setSoil_type(event.target.value)}
          />
        </div>
        <div className={styles.grid_item}>
          <label className={styles.label} htmlFor="use">
            Verwendung
          </label>
          <input
            className={styles.input}
            type="text"
            id="use"
            value={use}
            onChange={(event) => setUse(event.target.value)}
          />
        </div>
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
          <div className={styles.input_btn_one}>
            <input type="submit" id="save" value="Speichern" />
          </div>
        </div>
        {formError && <p className="error">{formError}</p>}
      </div>
    </form>
  );
}
