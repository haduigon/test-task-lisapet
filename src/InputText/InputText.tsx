import styles from "./InputText.module.scss";
import SearchIcon from "../SearchIcon";
import QuestionIcon from "../QuestionIcon";
import TextIcon from "../TextIcon";
import { useContext } from "react";
import { AppStateContext } from "../AppStateContext/AppStateContext";
import { useHandleChange, useValidate } from "../helpers/utils";
import classNames from "classnames";

const InputText = () => {
  const { state } = useContext(AppStateContext);

  const handleInput = useHandleChange();

  const onBlurValidate = useValidate();

  return (
      <div
      className={classNames(styles.box, {
        [styles.errorBox]: state.hasError && !state.darkMode,
        [styles.boxDark]: state.darkMode && !state.hasError,
        [styles.errorBoxDark]: state.darkMode && state.hasError,
        'mb-4': !state.labelSidePosition,
        [styles.noBorder]: !state.border,
      })}
      tabIndex={0}
    >
      <div className={classNames(`centered-flex`, {
        [styles.innerBoxS]: state.size === 's',
        [styles.innerBoxM]: state.size === 'm',
        [styles.innerBoxL]: state.size === 'l',
        [styles.innerBoxXL]: state.size === 'xl',
      })}>
        {state.iconBefore && <SearchIcon />}
        <input
          id={state.inputId}
          type={state.type}
          placeholder="Input..."
          className={classNames(`ml-5 ${styles.input} text`, {
            [styles.text]: state.size === 's' || state.size === 'm',
            [styles.textBig]: state.size === 'l' || state.size === 'xl',
            [styles.container]: state.labelSidePosition,
            [styles.inputDark]: state.darkMode,
            [styles.reverse]: state.isAlignmentRight,
          })}
          value={state.value}
          onChange={(event) => handleInput(event)}
          onBlur={(event) => onBlurValidate(event)}
          disabled={state.disabled}
        />
        <div className="centered-flex ml-5">
          {state.iconAfter && <QuestionIcon />}
          {state.shortKey && <TextIcon />}
        </div>
      </div>


      </div>
  );
};

export default InputText;
