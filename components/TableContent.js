import { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import DeleteRow from "./DeleteRow";
import styles from "./TableContent.module.css";

export default function TableContent(props) {
  const week = props.week;
  const [ansaatWeek, setAnsaatWeek] = useState(props.ansaatplan.week);
  const [title, setTitle] = useState(props.ansaatplan.title);
  const [amount, setAmount] = useState(props.ansaatplan.amount);
  const [unit, setUnit] = useState(props.ansaatplan.unit);
  const [variety, setVariety] = useState(props.ansaatplan.variety);
  const [category, setCategory] = useState(props.ansaatplan.category);
  const [soil_type, setSoil_type] = useState(props.ansaatplan.soil_type);
  const [tray_type, setTray_type] = useState(props.ansaatplan.tray_type);
  const [use, setUse] = useState(props.ansaatplan.use);

  const handleSave = async (event) => {
    event.preventDefault();
    const { data, error } = await supabase
      .from("ansaatplan")
      .update({
        week: ansaatWeek,
        title: title,
        amount: amount,
        unit: unit,
        variety: variety,
        category: category,
        soil_type: soil_type,
        tray_type: tray_type,
        use: use,
      })
      .eq("id", props.ansaatplan.id)
      .select();

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
    }
  };

  if (week === ansaatWeek) {
    return (
      <form className={styles.form}>
        <div className={styles.grid}>
          <div className={styles.grid_item}>
            <input
              className={styles.input}
              type="number"
              id="week"
              min="1"
              max="53"
              defaultValue={week}
              onChange={(event) => setWeek(event.target.value)}
            />
          </div>
          <div className={styles.grid_item}>
            <input
              className={styles.input}
              type="text"
              id="title"
              defaultValue={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className={styles.grid_item}>
            <input
              className={styles.input}
              type="number"
              id="amount"
              min="1"
              max="100"
              defaultValue={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
          </div>
          <div className={styles.grid_item}>
            <input
              className={styles.input}
              type="text"
              id="unit"
              defaultValue={unit}
              onChange={(event) => setUnit(event.target.value)}
            />
          </div>
          <div className={styles.grid_item}>
            <input
              className={styles.input}
              type="text"
              id="variety"
              defaultValue={variety}
              onChange={(event) => setVariety(event.target.value)}
            />
          </div>
          <div className={styles.grid_item}>
            <input
              className={styles.input}
              type="text"
              id="tray_type"
              defaultValue={tray_type}
              onChange={(event) => setTray_type(event.target.value)}
            />
          </div>
          <div className={styles.grid_item}>
            <input
              className={styles.input}
              type="text"
              id="soil"
              defaultValue={soil_type}
              onChange={(event) => setSoil_type(event.target.value)}
            />
          </div>
          <div className={styles.grid_item}>
            <input
              className={styles.input}
              type="text"
              id="use"
              defaultValue={use}
              onChange={(event) => setUse(event.target.value)}
            />
          </div>
          <div className={styles.grid_item}>
            <div className={styles.input_btn}>
              <input
                type="submit"
                id="save"
                value="Speichern"
                onClick={handleSave}
              />

              <DeleteRow
                ansaatplan={props.ansaatplan}
                onDelete={props.onDelete}
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}
