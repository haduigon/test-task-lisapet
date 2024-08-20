import { useContext } from "react";
import InfoIcon from "./InfoIcon/InfoIcon";
import styles from './InputLabel.module.scss';
import { AppStateContext } from "../AppStateContext/AppStateContext";

// type Props = {
//   labelFor?: string,
// }

const InputLabel = () => {

  const { state } = useContext(AppStateContext);

  console.log(state);
  
  return (
    <label
      className={styles.labelBox}
      htmlFor={state.inputId}
    >
      Email
      <InfoIcon />
    </label>
  )
}

export default InputLabel;