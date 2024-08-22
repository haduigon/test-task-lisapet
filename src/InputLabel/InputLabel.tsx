import { useContext } from "react";
import InfoIcon from "../InfoIcon/InfoIcon";
import styles from './InputLabel.module.scss';
import { AppStateContext } from "../AppStateContext/AppStateContext";
import classNames from "classnames";

const InputLabel = () => {

  const { state } = useContext(AppStateContext);
  
  return (
    <label
      className={classNames(`mb-4 ${styles.labelBox}`, {
        [styles.textSmall]: state.size === 's' || state.size === 'm',
        [styles.textBig]: state.size === 'l' || state.size === 'xl',
      })}
      htmlFor={state.inputId}
    >
      {state.label}
      <InfoIcon />
    </label>
  )
}

export default InputLabel;