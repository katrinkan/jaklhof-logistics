import styles from "./CollapsibleContent.module.css";
import UpdateToDo from "./UpdateToDo";

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
      <UpdateToDo ansaatplan={props.ansaatplan} />
    </>
  );
}
