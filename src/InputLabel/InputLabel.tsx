import { useContext } from "react";
import InfoIcon from "./InfoIcon/InfoIcon";
import styles from './InputLabel.module.scss';
import { AppStateContext } from "../AppStateContext/AppStateContext";

const InputLabel = () => {

  const { state } = useContext(AppStateContext);

  return (
    <label
      className={`${styles.labelBox} mb-4`}
      htmlFor={state.inputId}
    >
      Email
      <InfoIcon />
    </label>
  )
}

export default InputLabel;