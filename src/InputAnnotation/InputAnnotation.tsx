import { useContext } from "react";
import { AppStateContext } from "../AppStateContext/AppStateContext";
import styles from './InputAnnotation.module.scss';
import classNames from "classnames";

const InputAnnotation = () => {
  const { state } = useContext(AppStateContext);
  return (
    <div>
      <p
        className={classNames(styles.text, {
          [styles.textError]: state.hasError && !state.darkMode,
          [styles.disabled]: state.disabled && !state.darkMode,
          [styles.textDark]: state.darkMode,
          [styles.textErrorDark]: state.darkMode && state.hasError,
          [styles.disabledDark]: state.darkMode && state.disabled,
        })}
      >
        {state.annotation}
      </p>
    </div>
  )
}

export default InputAnnotation;