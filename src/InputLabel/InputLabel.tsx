import { useContext } from "react";
import InfoIcon from "./InfoIcon/InfoIcon";
import styles from './InputLabel.module.scss';
import { AppStateContext } from "../AppStateContext/AppStateContext";

const InputLabel = () => {

  const { state } = useContext(AppStateContext);
  console.log(state, 'tate into input label');
  
  return (
    <label
      className={`${styles.labelBox} mb-4`}
      htmlFor={state.inputId}
    >
      {state.label}
      <InfoIcon />
    </label>
  )
}

export default InputLabel;