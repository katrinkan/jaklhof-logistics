import styles from "./TableContent.module.css";

export default function TableContent(props) {
  const week = props.week;
  const ansaatWeek = props.ansaatplan.week;

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
              defaultValue={props.ansaatplan.week}
            />
          </div>
          <div className={styles.grid_item}>
            <input
              className={styles.input}
              type="text"
              id="title"
              defaultValue={props.ansaatplan.title}
            />
          </div>
          <div className={styles.grid_item}>
            <input
              className={styles.input}
              type="number"
              id="amount"
              min="1"
              max="100"
              defaultValue={props.ansaatplan.amount}
            />
          </div>
          <div className={styles.grid_item}>
            <input
              className={styles.input}
              type="text"
              id="unit"
              defaultValue={props.ansaatplan.unit}
            />
          </div>
          <div className={styles.grid_item}>
            <input
              className={styles.input}
              type="text"
              id="variety"
              defaultValue={props.ansaatplan.variety}
            />
          </div>
          <div className={styles.grid_item}>
            <input
              className={styles.input}
              type="text"
              id="tray_type"
              defaultValue={props.ansaatplan.tray_type}
            />
          </div>
          <div className={styles.grid_item}>
            <input
              className={styles.input}
              type="text"
              id="soil"
              defaultValue={props.ansaatplan.soil_type}
            />
          </div>
          <div className={styles.grid_item}>
            <input
              className={styles.input}
              type="text"
              id="use"
              defaultValue={props.ansaatplan.use}
            />
          </div>
          <div className={styles.grid_item}>
            <div className={styles.input_btn}>
              <input type="submit" id="save" value="Speichern" />

              <input type="submit" id="delete" value="Löschen" />
            </div>
          </div>
        </div>
      </form>
    );
  }
}
