import styles from "./Display.module.css";

function Display({value}) {
  return <input className={styles.input} type="text" value={value} readOnly/>;
}

export default Display;
