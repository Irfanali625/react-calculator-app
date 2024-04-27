import { useState } from "react";
import styles from "./App.module.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
function App() {
  const [calValue, setCalValue] = useState("");

  function buttonClick(event, buttonText) {
    if (buttonText == "C") {
      setCalValue("");
    } else if (buttonText == "=") {
      const result = eval(calValue);
      setCalValue(result);
    } else {
      const newValue = calValue + buttonText;
      setCalValue(newValue);
    }
  }

  return (
    <div className={styles.calculator}>
      <Display value={calValue}></Display>
      <Buttons buttonClick={buttonClick}></Buttons>
    </div>
  );
}

export default App;
