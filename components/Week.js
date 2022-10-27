import styles from "./Week.module.css";
import { useState } from "react";

export default function Week(props) {
  const [week, setWeek] = useState(props.weekNumber);

  const handleChange = (event) => {
    setWeek(event.target.value);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Woche {week}</h2>
      <form className={styles.form}>
        <label htmlFor="week" className={styles.label}>
          Woche ändern
        </label>
        <input
          type="number"
          name="week"
          id="week"
          min="1"
          max="52"
          onChange={handleChange}
          defaultValue={props.weekNumber}
          className={styles.input}
        />
      </form>
    </div>
  );
}
