import styles from "./Week.module.css";
import { useState } from "react";

export default function Week() {
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 1);
  const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil(days / 7);

  const [week, setWeek] = useState(weekNumber);

  const handleChange = (event) => {
    setWeek(event.target.value);
  };

  console.log(week);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Woche {week}</h2>
      <form className={styles.form}>
        <label for="week" className={styles.label}>
          Woche ändern
        </label>
        <input
          type="number"
          name="week"
          min="1"
          max="52"
          onChange={handleChange}
          value={week}
          className={styles.input}
        />
      </form>
    </div>
  );
}
