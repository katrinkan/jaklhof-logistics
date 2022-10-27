import styles from "./CollapsibleContent.module.css";

export default function CollapsibleContent(props) {
  return (
    <>
      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <h6>Anzahl</h6>
          <h5 className={styles.description}>{props.ansaatplan.amount}</h5>
        </div>
        <div className={styles.gridItem}>
          <h6>Einheit</h6>
          <h5 className={styles.description}>{props.ansaatplan.unit}</h5>
        </div>
        <div className={styles.gridItem}>
          <h6>Sorte</h6>
          <h5 className={styles.description}>{props.ansaatplan.variety}</h5>
        </div>
        <div className={styles.gridItem}>
          <h6>Platten-Typ</h6>
          <h5 className={styles.description}>{props.ansaatplan.tray_type}</h5>
        </div>
        <div className={styles.gridItem}>
          <h6>Substrat</h6>
          <h5 className={styles.description}>{props.ansaatplan.soil_type}</h5>
        </div>
        <div className={styles.gridItem}>
          <h6>Verwendung</h6>
          <h5 className={styles.description}>{props.ansaatplan.usage}</h5>
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
          defaultValue={props.ansaatplan.amount}
          className={styles.input}
        />
      </form>
      <button className="btn">Ich mach's!</button>
    </>
  );
}
