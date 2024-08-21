import styles from "./InputText.module.scss";
import SearchIcon from "../SearchIcon";
import QuestionIcon from "../QuestionIcon";
import TextIcon from "../TextIcon";
import { useContext } from "react";
import { AppStateContext } from "../AppStateContext/AppStateContext";
import { useHandleChange } from "../helpers/utils";
import classNames from "classnames";

const InputText = () => {
  const { state } = useContext(AppStateContext);

  const handleInput = useHandleChange();

  return (
    <div className={`${styles.box} mb-4`} tabIndex={0}>
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
          // className={`${styles.textBig} ml-5`}
          className={classNames(`ml-5`, {
            [styles.text]: state.size === 's' || state.size === 'm',
            [styles.textBig]: state.size === 'l' || state.size === 'xl',
          })}
          value={state.value}
          onChange={(event) => handleInput(event)}
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
