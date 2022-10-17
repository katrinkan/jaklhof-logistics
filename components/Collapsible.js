import { useState } from "react";
import { useRef } from "react";
import styles from "./Collapsible.module.css";

export default function Collapsible(props) {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button onClick={handleToggle} className={`btn ${styles.btn}`}>
        {props.label}
      </button>
      {open && (
        <div>
          <div className={open ? styles.contentShow : styles.contentParent}>
            {" "}
            <div className={styles.content}>{props.children}</div>
          </div>
        </div>
      )}
    </div>
  );
}
