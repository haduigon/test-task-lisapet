import { useContext } from "react";
import InfoIcon from "../InfoIcon/InfoIcon";
import styles from './InputLabel.module.scss';
import { AppStateContext } from "../AppStateContext/AppStateContext";
import classNames from "classnames";
import StarIcon from "../StarIcon";

const InputLabel = () => {

  const { state } = useContext(AppStateContext);
  
  return (
    <label
      className={classNames(styles.labelBox, {
        [styles.textSmall]: state.size === 's' || state.size === 'm',
        [styles.textBig]: state.size === 'l' || state.size === 'xl',
        [styles.dark] : state.darkMode && !state.disabled,
        [styles.darkDisabled] : state.darkMode && state.disabled,
        [styles.disabledText]: state.disabled && !state.darkMode,
        'mb-4': !state.labelSidePosition,
      })}
      htmlFor={state.inputId}
    >
      {state.isRequired.text.length > 0
        ? state.label + ' ' + state.isRequired.text
        : state.label
      }
      {state.isRequired.type === 'icon' && (
         <StarIcon/>
      )}
      {state.popUpText?.length > 0 && (
        <InfoIcon />
      )}
    </label>
  )
}

export default InputLabel;