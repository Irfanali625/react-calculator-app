import styles from "./Buttons.module.css";
const buttonNames = [
  "C",
  "1",
  "2",
  "+",
  "3",
  "4",
  "-",
  "5",
  "6",
  "*",
  "7",
  "8",
  "/",
  "=",
  "9",
  "0",
  ".",
];

function Buttons({buttonClick}) {
  return (
    <div className={styles.displayButtons}>
      {buttonNames.map((buttonName) => {
        return <button onClick={() => buttonClick(event, buttonName)} key={buttonName} className={styles.button}>{buttonName}</button>;
      })}
    </div>
  );
}

export default Buttons;
