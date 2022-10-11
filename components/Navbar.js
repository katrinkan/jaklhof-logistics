import Image from "next/image";
import jaklhofLogo from "../public/jaklhof-logo.png";
import jaklhofSonne from "../public/jaklhof-sonne.png";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navItemStart}>
        <Image src={jaklhofLogo} width={90} height={40} />
      </div>
      <div className={styles.navItemUser}>
        <h5 className={styles.greeting}>Hallo, Anna!</h5>
      </div>
      <div className={styles.navItemEnd}>
        <Image src={jaklhofSonne} width={40} height={40} />
      </div>
    </nav>
  );
}
